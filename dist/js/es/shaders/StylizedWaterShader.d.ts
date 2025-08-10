import { ShaderInputs } from "./ShaderInputs";
import { BaseShader } from "webgl-framework";
export declare class StylizedWaterShader extends BaseShader implements ShaderInputs {
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
    attributes?: number[];
    typedAttributes?: {
        [key: number]: number;
    };
    uniforms?: WebGLUniformLocation[];
    fillCode(): void;
    fillUniformsAttributes(): void;
}
