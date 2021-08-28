import CinemaniaScene from "./scene/scene";

interface CinemaniaBuilderOptions {
    width: number,
    height: number
}

class CinemaniaBuilder {
    scenes: CinemaniaScene[] = []
    width: number
    height: number
    constructor(options?: CinemaniaBuilderOptions) {
        this.width = options?.width ?? 1920
        this.height = options?.height ?? 1080
    }
    addScene(scene: CinemaniaScene) {
        this.scenes.push(scene)
    }
    start() {
        this.scenes.forEach(scene => {
            scene.render()
        })
    }
}

export default CinemaniaBuilder;