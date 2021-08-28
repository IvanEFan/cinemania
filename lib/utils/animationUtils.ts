import { EasingFunction, linear } from './easingFunction'

export const generateAnimation = (from: number, to: number, duration: number, easing: EasingFunction = linear) => {
    const reversed = from > to
    reversed && ([from, to] = [to, from])
    let states: number[] = []
    for (let i = 0; i < duration; i ++) {
        states.push(easing(i, from, to, duration))
    }
    reversed && states.reverse()
    return states
}