import { NodeCanvasRenderingContext2D } from "canvas";
import { CinemaniaAnimationOptions } from "../animation/animation";
import CinemaniaAnimations from "../animation/animations";

const { FadeInAnimation, FadeOutAnimation, TransformAnimation } = CinemaniaAnimations

export interface BaseCobjectOptions {
    x: number,
    y: number
}

class CObject {
    opacity: number = 0
    x: number
    y: number
    animations = {
        fadeIn: (options?: CinemaniaAnimationOptions) => new FadeInAnimation(this, options),
        fadeOut: (options?: CinemaniaAnimationOptions) => new FadeOutAnimation(this, options),
        transform: (from: any, to: any, options?: CinemaniaAnimationOptions) => new TransformAnimation(this, from, to, options)
    }
    constructor(options?: BaseCobjectOptions) {
        this.x = options?.x ?? 0
        this.y = options?.y ?? 0
    }
    render(ctx: NodeCanvasRenderingContext2D) {

    }
}

export default CObject;