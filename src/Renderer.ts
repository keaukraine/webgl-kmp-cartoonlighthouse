import { BaseShader, DiffuseShader } from "webgl-framework";
import { cartoonlighthouse, lib } from "./KotlinLib";
import { SceneRenderer } from "./SceneRenderer";
import { ShaderInputs } from "./shaders/ShaderInputs";
import { DiffuseColoredShader } from "./shaders/DiffuseColoredShader";
import { DiffuseColoredAtShader } from "./shaders/DiffuseColoredAtShader";
import { StylizedWaterShader } from "./shaders/StylizedWaterShader";
import { ColorShader } from "./shaders/ShaderColor";
import { FishnetShader } from "./shaders/FishnetShader";
import { WindShader } from "./shaders/WindShader";

export class Renderer extends SceneRenderer<lib.org.androidworks.cartoonlighthouse.CartoonLighthouseScene> {
    protected SCENE_BOUNDING_BOX = {
        minX: -5000,
        maxX: 5000,
        minY: -5000,
        maxY: 5000,
        minZ: -5000,
        maxZ: 5000
    };
    protected FREE_MOVEMENT_SPEED = 300;

    constructor() {
        super();
        this.initCommands();
    }

    /**
     * Fills static array `commands` with the commands from the scene. Use only if scene has static commands.
     */
    protected initCommands(): void {
    }

    createScene(): lib.org.androidworks.cartoonlighthouse.CartoonLighthouseScene {
        const scene = new cartoonlighthouse.CartoonLighthouseScene();
        scene.randomCamera();
        return scene;
    }

    createShader(name: string): (BaseShader & ShaderInputs) {
        // const filters = getFilters("gl_FragColor");
        // const filter = filters[this.scene?.settings.colorMode.name!];

        if (name === "Diffuse") {
            return new DiffuseShader(this.gl);
        } else if (name === "DiffuseColoredAt") {
            return new DiffuseColoredAtShader(this.gl, []);
        } else if (name === "DiffuseColored") {
            return new DiffuseColoredShader(this.gl, []);
        } else if (name === "StylizedWater") {
            return new StylizedWaterShader(this.gl);
        } else if (name === "Color") {
            return new ColorShader(this.gl);
        } else if (name === "Fishnet") {
            return new FishnetShader(this.gl);
        } else if (name === "Wind") {
            return new WindShader(this.gl);
        }

        throw new Error(`Unknown shader type ${name}`);
    }

    public get settings() {
        return this.scene!.settings;
    }

    nextCamera(): void {
        this.scene?.nextCamera();
    }

    randomCamera(): void {
        this.scene?.randomCamera();
    }
}
