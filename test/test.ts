import Ffmpeg from "fluent-ffmpeg";

// Ffmpeg()
// .input('../../out/frame50')
// .input('../../out/frame51')
// .input('../../out/frame52')
// .input('../../out/frame53')
// .input('../../out/frame54')
// .input('../../out/frame55')
// .input('../../out/frame56')
// .input('../../out/frame57')
// .input('../../out/frame58')
// .input('../../out/frame59')
// .input('../../out/frame60')
// .output('../out.mp4')

Ffmpeg()
.input('/Users/yifanwang/code/proj/cinemania/out/frame%1d.png')
.loop(10)
.outputFPS(1)
.saveToFile('/Users/yifanwang/Downloads/out.mp4')
.on('progress', console.log)
.on('end', () => {
    console.log("done");
});