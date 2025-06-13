if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    console.log("getUserMedia is supported");
    navigator.mediaDevices
        .getUserMedia(
            {
                audio: true
            }
        )

        .then(stream => getUserMediaSuccess)

        .catch(error => {
            console.error(`${error} occured when configuring getUserMedia`)
        });
}
else {
    console.log("getUserMedia is not supported on your browser/device");
}

function getUserMediaSuccess(stream){
    const mediaRecorder = new MediaRecorder(stream);
    let chunks = [];

    document.getElementById("startBtn").onclick = () => {
        mediaRecorder.start();
        console.log("started recording");
    };
    document.getElementById("stopBtn").onclick = () => {
        mediaRecorder.stop();
        console.log("stopped recording");
    };
    mediaRecorder.ondataavailable = e => {
        chunks.push(e.data);
    };
}