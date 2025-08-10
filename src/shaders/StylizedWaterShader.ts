import { ShaderInputs } from "./ShaderInputs";
import { BaseShader } from "webgl-framework";
import { engine } from "../KotlinLib";

export class StylizedWaterShader extends BaseShader  implements ShaderInputs {
    view_proj_matrix: WebGLUniformLocation | undefined;
    sTexture: WebGLUniformLocation | undefined;
    rm_Vertex: number | undefined;

    uTime: WebGLUniformLocation | undefined;
    uScale: WebGLUniformLocation | undefined;
    model_matrix: WebGLUniformLocation | undefined;
    sMask: WebGLUniformLocation | undefined;
    color: WebGLUniformLocation | undefined;
    highlightColor: WebGLUniformLocation | undefined;

    fogColor: WebGLUniformLocation | undefined;

    public attributes?: number[];
    public typedAttributes?: { [key: number]: number };
    public uniforms?: WebGLUniformLocation[];

    fillCode() {
        this.vertexShaderCode = `uniform mat4 view_proj_matrix;
            attribute vec4 rm_Vertex;
            varying vec2 vTextureCoord1;
            varying vec2 vTextureCoord2;
            varying vec2 vTextureCoord1Foam;
            varying vec2 vTextureCoord2Foam;
            varying vec2 vTextureCoordMask;
            varying float vFixedFogCoeff;
            /*UNIFORMS*/

            uniform float uTime;
            uniform vec3 uScale; // x - waves scale, y - foam scale, z - mask scale
            uniform mat4 model_matrix;

            void main() {
              gl_Position = view_proj_matrix * rm_Vertex;

              vec4 position = model_matrix * rm_Vertex;
              vec2 coord = position.xy * uScale.x;
              vec2 coordFoam = position.xy * uScale.y;

              vTextureCoord1 = coord + vec2(uTime, uTime);
              vTextureCoord2 = coord.yx + vec2(-uTime*0.9, -uTime*0.95);

              vTextureCoord1Foam = coordFoam + vec2(uTime, uTime);
              vTextureCoord2Foam = coordFoam.yx + vec2(-uTime*0.9, -uTime*0.95);

              vTextureCoordMask = position.yx * -uScale.z + vec2(0.5, 0.5);

              vFixedFogCoeff = clamp(pow(length(rm_Vertex.xy), 2.), 0., 1.);
              /*POST_VERTEX*/;
            }`;

        this.fragmentShaderCode = `precision mediump float;
            varying vec2 vTextureCoord1;
            varying vec2 vTextureCoord2;
            varying vec2 vTextureCoord1Foam;
            varying vec2 vTextureCoord2Foam;
            varying vec2 vTextureCoordMask;
            varying float vFixedFogCoeff;

            uniform sampler2D sTexture;
            uniform sampler2D sMask;
            uniform vec4 color;
            uniform vec4 highlightColor;
            uniform vec4 fogColor;
            /*UNIFORMS*/

            void main() {
                vec4 mask = texture2D(sMask, vTextureCoordMask);

                float coeff1 = texture2D(sTexture, vTextureCoord1).r * 1.0;
                float coeff2 = texture2D(sTexture, vTextureCoord2).r * 1.0;
                float combined = coeff1 * coeff2;

                float coeff1Foam = texture2D(sTexture, vTextureCoord1Foam).r * 1.0;
                float coeff2Foam = texture2D(sTexture, vTextureCoord2Foam).r * 1.0;
                float combinedFoam = coeff1Foam * coeff2Foam;

                float waves = clamp(combined, 0.0, 1.0);
                if (waves > 0.22) {
                    waves = 0.0;
                }
                waves = smoothstep(0.1, 0.5, waves) * 0.6;

                float glareCoeff = 2.0;
                float foamCoeff = mask.r * 6.;
                float brightnessCoeff = mask.r * 0.15;
                // float glare = smoothstep(0.95, 1.0, combined * 2.);
                // float glare = smoothstep(0.94, 1.0, combined * 12.); // more white highlights

                // combined += combinedFoam * foamCoeff;

                float glare = smoothstep(0.95, 1.0, combined * glareCoeff);
                float foam = smoothstep(0.95, 1.0, combinedFoam * foamCoeff);

                float final = waves;
                // final *= 0.001;
                final += glare * 0.9;
                final += foam * 0.8 * mask.r;

                // vec4 color = vec4(0.0, 1.0, 1.0, 1.0) * 0.3;
                gl_FragColor = color + final * highlightColor;
                gl_FragColor += brightnessCoeff;

                // gl_FragColor *= 0.1; gl_FragColor += mask;

                gl_FragColor = mix(gl_FragColor, fogColor, vFixedFogCoeff);
                /*POST_FRAGMENT*/;
            }`;
    }

    fillUniformsAttributes() {
        this.uTime = this.getUniform("uTime");
        this.uScale = this.getUniform("uScale");
        this.view_proj_matrix = this.getUniform("view_proj_matrix");
        this.model_matrix = this.getUniform("model_matrix");
        this.sTexture = this.getUniform("sTexture");
        this.sMask = this.getUniform("sMask");
        this.color = this.getUniform("color");
        this.highlightColor = this.getUniform("highlightColor");
        this.fogColor = this.getUniform("fogColor");

        this.rm_Vertex = this.getAttrib("rm_Vertex");

        this.attributes = [this.rm_Vertex];
        this.typedAttributes = {
            [engine.AttributeType.VERTEX.ordinal]: this.rm_Vertex!
        };
        this.uniforms = [
            this.view_proj_matrix,
            this.uTime,
            this.uScale,
            this.model_matrix,
            this.sTexture,
            this.sMask,
            this.color,
            this.highlightColor,
            this.fogColor
        ];
    }
}
