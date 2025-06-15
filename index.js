if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    console.log("getUserMedia is supported");
    navigator.mediaDevices
        .getUserMedia(
            {
                audio: true
            }
        )

        .then(stream => getUserMediaSuccess(stream))

        .catch(error => {
            console.error(`"${error}" occured when configuring getUserMedia`)
        });
}
else {
    console.log("getUserMedia is not supported on your browser/device");
}

function getUserMediaSuccess(stream){
    console.log("successssssss");
    const mediaRecorder = new MediaRecorder(stream);
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    let chunks = [];
    let chunkBytes = [];

    startBtn.onclick = () => {
        console.log("started recording");
        mediaRecorder.start();
        console.log("sucessfully started recording");
    };
    stopBtn.onclick = async () => {
        console.log("stopped recording");
        mediaRecorder.stop();
        console.log("sucessfully stopped recording");
        chunkBytes = chunkBytes[0].bytes()
        console.log(chunks);
        console.log(chunkBytes);
    };
    mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
        console.log(chunks);
    };
}