import { CinemaniaBuilder, CinemaniaScene } from "../lib";
import CText from "../lib/cobjects/text";
import { getDuration } from "../lib/utils/sceneUtils";

const builder = new CinemaniaBuilder()

const scene = new CinemaniaScene()
builder.addScene(scene)

const title = new CText('Helloworld!', { x: 100, y: 100 })
scene.add(title)
scene.play(title.animations.fadeIn())
scene.play(title.animations.transform({ x: 100 }, { x: 400 }))
scene.play(title.animations.transform({ y: 100 }, { y: 800 }))
scene.play(title.animations.fadeOut())

builder.start()

console.log(getDuration(scene) + ' frames')