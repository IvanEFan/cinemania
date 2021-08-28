import { createCanvas } from "canvas";
import CinemaniaAnimation from "../animation/animation";
import CObject from "../cobjects/cobject";
import fs from "fs"
import { getDuration } from "../utils/sceneUtils";
import Ffmpeg from "fluent-ffmpeg";

interface KeyFrame {
    time: number,
    state: any
}

interface ParsedAnimation {
    object: CObject,
    keyframes: KeyFrame[]
}

class CinemaniaScene {
    children: CObject[] = []
    animations: CinemaniaAnimation[] = []
    animationQueue: ParsedAnimation[] = []
    constructor() {

    }
    add(object: CObject) {
        this.children.push(object)
    }
    render() {
        const canvas = createCanvas(1920, 1080)
        const ctx = canvas.getContext('2d')

        const children = [...this.children]
        let frame = 0
        // let command = Ffmpeg().outputFPS(60)
        while (frame < getDuration(this)) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            this.animations.forEach(animation => {
                if (animation.startTime === frame) {
                    const keyframes = animation.run()
                    let parsed: ParsedAnimation = {
                        object: animation.object,
                        keyframes: []
                    }
                    for (let prop in keyframes) {
                        let states: [] = (keyframes as any)[prop]
                        states.forEach((value, index) => {
                            const state: any = {}
    
                            state[prop] = value
    
                            parsed.keyframes.push({
                                time: frame + index,
                                state: state
                            })
                        });
                    }
                    this.animationQueue.push(parsed)
                }
            })
            children.forEach(child => {
                this.animationQueue.forEach(animation => {
                    if (animation.object === child) {
                        animation.keyframes.forEach(keyframe => {
                            if (keyframe.time === frame) {
                                for (let prop in keyframe.state) {
                                    (child as any)[prop] = keyframe.state[prop]
                                    console.log(frame, prop, keyframe.state[prop])
                                }
                            }
                        });
                    }
                })
                child.render(ctx)
            })
            // console.log('<img src="' + canvas.toDataURL('image/png') + '" />')
            // command.addInput(canvas.toDataURL())
            // Ffmpeg().input(canvas.toDataURL()).saveToFile('/Users/yifanwang/Downloads/cinemania/video.mp4')
            const data = canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, "")
            const buf = Buffer.from(data, "base64");
            fs.writeFile('/Users/yifanwang/Downloads/cinemania/frame' + frame + '.png', buf, (err) => {})
            frame ++
        }
        // command.saveToFile('/Users/yifanwang/Downloads/cinemania/output.mp4')
    }
    play(animation: CinemaniaAnimation) {
        animation.startTime === -1 && animation.setStartTime(getDuration(this) + 20)
        this.animations.push(animation)
    }
}

export default CinemaniaScene;