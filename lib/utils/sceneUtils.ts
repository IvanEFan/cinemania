import CinemaniaScene from "../scene/scene";
import accurate from 'accurate'

export const getDuration = (scene: CinemaniaScene) => {
    let duration = 0
    scene.animations.forEach(animation => {
        let endTime = accurate.add(animation.startTime, animation.duration)
        duration = Math.max(duration, endTime)
    })
    return duration
}