import { CinemaniaBuilder, CinemaniaScene } from "../lib";
import CText from "../lib/cobjects/text";
import { getDuration } from "../lib/utils/sceneUtils";
import { CinemaniaAnimations } from "../lib";

const { TransformAnimation } = CinemaniaAnimations

const builder = new CinemaniaBuilder()

const scene = new CinemaniaScene()
builder.addScene(scene)

const title = new CText('Helloworld!', { x: 100, y: 100 })
scene.add(title)
// scene.play(title.animations.fadeIn())
// scene.play(title.animations.fadeOut())
scene.play(new TransformAnimation(title, { opacity: 0 }, { opacity: 1 }))

builder.start()

console.log(getDuration(scene) + ' s')