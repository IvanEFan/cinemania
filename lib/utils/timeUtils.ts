import accurate from 'accurate'

export const secToFrame = (time: number, fps: number) => accurate.multiply(time, fps)
export const frameToSec = (time: number, fps: number) => accurate.divide(time, fps)