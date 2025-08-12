import { ShaderInputs } from "./ShaderInputs";
import { BaseShader } from "webgl-framework";
export declare class FishnetShader extends BaseShader implements ShaderInputs {
    view_proj_matrix: WebGLUniformLocation | undefined;
    sTexture: WebGLUniformLocation | undefined;
    rm_Vertex: number | undefined;
    rm_TexCoord0: number | undefined;
    time: WebGLUniformLocation | undefined;
    color: WebGLUniformLocation | undefined;
    attributes?: number[];
    typedAttributes?: {
        [key: number]: number;
    };
    uniforms?: WebGLUniformLocation[];
    /** @inheritdoc */
    fillCode(): void;
    fillUniformsAttributes(): void;
}
