import CinemaniaScene from "../scene/scene";

export const getDuration = (scene: CinemaniaScene) => {
    let duration = 0
    scene.animations.forEach(animation => {
        let endTime = animation.startTime + animation.duration
        duration = Math.max(duration, endTime)
    })
    return duration
}