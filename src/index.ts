import { FullScreenUtils } from "webgl-framework";
import { Renderer } from "./Renderer";
import GUI from "lil-gui";
import { CameraMode } from "./CameraMode";
import { engine, cartoonlighthouse } from "./KotlinLib";


function ready(fn: () => void) {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


let renderer: Renderer;

ready(() => {
    renderer = new Renderer();
    renderer.ready = () => {
        initUI();
    };
    renderer.init("canvasGL", true);
});

function initUI(): void {
    document.getElementById("message")?.classList.add("hidden");
    document.getElementById("canvasGL")?.classList.remove("transparent");

    const gui = new GUI();
    const dummyConfig = {
        github: () => window.open("https://github.com/keaukraine/webgl-kmp-cartoonplanes-")
    };

    const fullScreenUtils = new FullScreenUtils();
    const fullscreen = {
        toggleFullscreen: () => {
            if (fullScreenUtils.isFullScreen()) {
                fullScreenUtils.exitFullScreen();
            } else {
                fullScreenUtils.enterFullScreen();
            }
        }
    };

    gui.add(
        renderer,
        "currentCameraMode",
        {
            "FrontEnd": CameraMode.FrontEnd,
            "FPS": CameraMode.FPS
        }
    ).name("Camera");

    gui.add(renderer.settings, "cameraPeriod", 0.1, 2, 0.1);

    gui.add(
        renderer.settings,
        "timeOfDay",
        {
            "Day": cartoonlighthouse.TimeOfDay.Day,
            "Night": cartoonlighthouse.TimeOfDay.Night,
            "Sunrise": cartoonlighthouse.TimeOfDay.Sunrise,
            "Sunset": cartoonlighthouse.TimeOfDay.Sunset
        }
    )
        .name("Time of Day")
        .onChange((value: any) => renderer.settings.timeOfDay = value);

    gui.add(renderer.settings, "lowQuality");
    gui.add(renderer.settings, "blurred");
    gui.add(renderer, "nextCamera");
    gui.add(renderer, "randomCamera");

    gui.add(fullscreen, "toggleFullscreen");

    initDebugUI();
}

function initDebugUI(): void {
    const canvas = document.getElementById("canvasGL");
    if (!canvas) {
        return;
    }

    document.addEventListener("keypress", event => {
        if (event.key === "f") {
            renderer.currentCameraMode = renderer.currentCameraMode === CameraMode.FPS ? CameraMode.FrontEnd : CameraMode.FPS;
        }
    });
}
