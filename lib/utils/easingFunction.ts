export type EasingFunction = (currentTime: number, startValue: number, changeValue: number, duration: number) => number

export const linear: EasingFunction = (currentTime: number, startValue: number, changeValue: number, duration: number) => {
    return changeValue * currentTime / duration + startValue;
}

export const easeInQuad: EasingFunction = (currentTime: number, startValue: number, changeValue: number, duration: number) => {
    currentTime /= duration;
    return changeValue * currentTime * currentTime + startValue;
}

export const easeOutQuad: EasingFunction = (currentTime: number, startValue: number, changeValue: number, duration: number) => {
    currentTime /= duration;
    return -changeValue * currentTime * (currentTime - 2) + startValue;
}

export const easeInOutQuad: EasingFunction = (currentTime: number, startValue: number, changeValue: number, duration: number) => {
    currentTime /= duration / 2;
    if (currentTime < 1) return changeValue / 2 * currentTime * currentTime + startValue;
    currentTime--;
    return -changeValue / 2 * (currentTime * (currentTime - 2) - 1) + startValue;
}