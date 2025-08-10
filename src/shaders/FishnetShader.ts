import { ShaderInputs } from "./ShaderInputs";
import { BaseShader } from "webgl-framework";
import { engine } from "../KotlinLib";

export class FishnetShader extends BaseShader implements ShaderInputs {
    view_proj_matrix: WebGLUniformLocation | undefined;
    sTexture: WebGLUniformLocation | undefined;
    rm_Vertex: number | undefined;
    rm_TexCoord0: number | undefined;
    time: WebGLUniformLocation | undefined;
    color: WebGLUniformLocation | undefined;

    public attributes?: number[];
    public typedAttributes?: { [key: number]: number };
    public uniforms?: WebGLUniformLocation[];

    /** @inheritdoc */
    fillCode() {
        this.vertexShaderCode = `#version 300 es
            precision highp float;
            uniform mat4 view_proj_matrix;
            in vec4 rm_Vertex;
            in vec2 rm_TexCoord0;
            out vec2 vTextureCoord;
            uniform float time;

            const float PI2 = 6.283185307179586;
            const float WAVE_SIZE = 1.0;

            void main() {
              vec4 position = rm_Vertex;

              float stiffness = pow(1.0 - rm_TexCoord0.x, 2.5);
              float fVertexId = float(gl_VertexID);
              float t = time * PI2 + fVertexId;
              vec3 offset = vec3(sin(t), cos(t), 0.0);
              offset *= stiffness * WAVE_SIZE;
              position.xyz += offset;

              gl_Position = view_proj_matrix * position;
              vTextureCoord = rm_TexCoord0;
            }`;

        this.fragmentShaderCode = `#version 300 es
            precision mediump float;
            in vec2 vTextureCoord;
            uniform sampler2D sTexture;
            out vec4 fragColor;
            uniform vec4 color;

            void main() {
              vec4 diffuse = texture(sTexture, vTextureCoord);
              // diffuse.r = 1.0 - vTextureCoord.x;
              fragColor = diffuse * color;
              if (diffuse.a < 0.8) { discard; }
            }`
    }

    fillUniformsAttributes() {
        this.rm_Vertex = this.getAttrib("rm_Vertex");
        this.rm_TexCoord0 = this.getAttrib("rm_TexCoord0");

        this.view_proj_matrix = this.getUniform("view_proj_matrix");
        this.time = this.getUniform("time");
        this.color = this.getUniform("color");
        this.sTexture = this.getUniform("sTexture");

        this.attributes = [this.rm_Vertex, this.rm_TexCoord0];
        this.typedAttributes = {
            [engine.AttributeType.VERTEX.ordinal]: this.rm_Vertex,
            [engine.AttributeType.UV0.ordinal]: this.rm_TexCoord0
        };

        this.uniforms = [
            this.view_proj_matrix,
            this.sTexture,
            this.color,
            this.time
        ];
    }
}
