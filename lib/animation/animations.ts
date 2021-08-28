import CObject from "../cobjects/cobject";
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
        return 6
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
                states[prop] = [this.from[prop], this.to[prop]]
            }
        }
        return states
    }
}

class FadeInAnimation extends CinemaniaAnimation {
    constructor(object: CObject, options?: CinemaniaAnimationOptions) {
        super(object, options)
    }
    getDefaultDuration() {
        return 6
    }
    run() {
        return {
            opacity: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }
    }
}

class FadeOutAnimation extends CinemaniaAnimation {
    constructor(object: CObject, options?: CinemaniaAnimationOptions) {
        super(object, options)
    }
    getDefaultDuration() {
        return 6
    }
    run() {
        return {
            opacity: [1, 0.8, 0.6, 0.4, 0.2, 0]
        }
    }
}

const CinemaniaAnimations = {
    FadeInAnimation,
    FadeOutAnimation,
    TransformAnimation
}

export default CinemaniaAnimations;