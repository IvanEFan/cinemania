import CObject from "../cobjects/cobject";
import { generateAnimation } from "../utils/animationUtils";
import CinemaniaAnimation, { CinemaniaAnimationOptions } from "./animation";

class TransformAnimation extends CinemaniaAnimation {
    from: any
    to: any
    constructor(object: CObject, from: any, to: any, options?: CinemaniaAnimationOptions) {
        super(object, options)
        this.from = from
        this.to = to
    }
    getDefaultDuration() {
        return 10
    }
    run() {
        let states: any = {}
        console.log(this.from, this.to)
        for (let prop in this.from) {
            if (!(prop in this.to)) {
                return false
            }
        }
        for (let prop in this.from) {
            if (prop in this.to) {
                states[prop] = generateAnimation(this.from[prop], this.to[prop], this.duration)
            }
        }
        return states
    }
}

class FadeInAnimation extends TransformAnimation {
    constructor(object: CObject, options?: CinemaniaAnimationOptions) {
        super(object, { opacity: 0 }, { opacity: 1 }, options)
    }
}

class FadeOutAnimation extends TransformAnimation {
    constructor(object: CObject, options?: CinemaniaAnimationOptions) {
        super(object, { opacity: 1 }, { opacity: 0 }, options)
    }
}

const CinemaniaAnimations = {
    FadeInAnimation,
    FadeOutAnimation,
    TransformAnimation
}

export default CinemaniaAnimations;