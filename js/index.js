"use strict";

const app = {
    video: document.querySelector("#videoElement"),
    init() {
        app.startVideo();
    },
    startVideo() {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err0r) {
                    console.log("Something went wrong!");
                });
        }
    }
};

app.init();