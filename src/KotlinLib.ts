import * as lib from "./lib/KMP-library-shared";

const engine = (lib as any).default.org.androidworks.engine as typeof lib.org.androidworks.engine;
const example = (lib as any).default.org.androidworks.example as typeof lib.org.androidworks.example;
const cartoonlighthouse = (lib as any).default.org.androidworks.cartoonlighthouse as typeof lib.org.androidworks.cartoonlighthouse;

export { engine, example, cartoonlighthouse, lib };
