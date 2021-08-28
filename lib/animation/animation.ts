import CObject from "../cobjects/cobject";
import { frameToSec } from "../utils/timeUtils";

export interface CinemaniaAnimationOptions {
    startTime?: number
    duration?: number
}

class CinemaniaAnimation {
    object: CObject
    startTime: number = 0
    duration: number = 0    // In sec
    constructor(object: CObject, options?: CinemaniaAnimationOptions) {
        this.object = object
        this.startTime = options?.startTime ?? -1
        this.duration = options?.duration ?? this.getDefaultDuration()
    }
    setStartTime(startTime: number) {
        this.startTime = startTime
    }
    setDuration(duration: number) {
        this.duration = duration
    }
    setDurationByFrame(time: number) {
        this.duration = frameToSec(time, 60)
    }
    getDefaultDuration() {
        return -1
    }
    run() {
        return {}
    }
}

export default CinemaniaAnimation;