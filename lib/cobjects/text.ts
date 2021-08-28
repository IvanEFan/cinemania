import { NodeCanvasRenderingContext2D } from "canvas";
import CObject, { BaseCobjectOptions } from "./cobject";

interface CTextOptions {

}

class CText extends CObject {
    text: string
    constructor(text: string, options?: BaseCobjectOptions & CTextOptions) {
        super(options)
        this.text = text
    }
    render(ctx: NodeCanvasRenderingContext2D) {
        ctx.font = '30px Arial'
        ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`
        ctx.fillText(this.text, this.x, this.y)
    }
}

export default CText;