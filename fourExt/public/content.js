async function startRecorder(audio, currentTab) {
  const mediaConstraints = {
    preferCurrentTab: currentTab,
    video: { mediaSource: "screen" },
    audio: audio,
  };

  const stream = await navigator.mediaDevices.getDisplayMedia(mediaConstraints);

  return stream;
}

async function onAccessApproved(stream) {
  var recorder = null;

  const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? "video/webm;codecs=vp9"
    : "video/webm;codecs=vp8";

  recorder = new MediaRecorder(stream, { mimeType });
  recorder.start();

  recorder.onstop = () => {
    stream.getTracks().forEach((track) => {
      if (track.readyState === "live") {
        track.stop();
      }
      window.open("https://hngxfour1.netlify.app/video", "_blank");
    });
  };

  recorder.ondataavailable = (e) => {
    let recordedBlob = e.data;
    var url = URL.createObjectURL(recordedBlob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return recorder;
}

const pause = (recorder) => {
  recorder.pause();
};

const resume = (recorder) => {
  recorder.resume();
};

const stop = (recorder) => {
  recorder.stop();
};

const clear = (recorder) => {
  recorder.clear();
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    const audio = message.audio;
    const currentTab = message.currentTab;
    (async () => {
      const stream = await startRecorder(audio, currentTab);
      const recorder = await onAccessApproved(stream);
      sendResponse({ status: "started" });
      const r = await fetch(chrome.runtime.getURL("/control.html"));
      const html = await r.text();
      document.body.insertAdjacentHTML("beforeend", html);
      const resumeControl = document.querySelector(".play");
      const pauseControl = document.querySelector(".pause");
      const stopControl = document.querySelector(".stop");
      const trashControl = document.querySelector(".trash");
      resumeControl.addEventListener("click", () => {
        console.log("play clicked");
        resume();
      });
      pauseControl.addEventListener("click", () => {
        console.log("pause clicked");
        pause(recorder);
      });
      stopControl.addEventListener("click", () => {
        console.log("stop clicked");
        stop(recorder);
      });
      trashControl.addEventListener("click", () => {
        console.log("trash clicked");
        clear(recorder);
      });
    })();
    return true;
  }

  // if (message.action === "stop") {
  //   if (!recorder) return;
  //   (async () => {
  //     console.log("from control");
  //     //await recorder.stop();
  //     sendResponse({ status: "stopped" });
  //   })();
  //   return true;
  // }
  // if (message.action === "pause") {
  //   if (!recorder) return;
  //   (async () => {
  //     await recorder.pause();
  //     sendResponse({ status: "pause" });
  //   })();
  //   return true;
  // }
  // if (message.action === "resume") {
  //   if (!recorder) return;
  //   (async () => {
  //     await recorder.resume();
  //     sendResponse({ status: "resume" });
  //   })();
  //   return true;
  // }
  // if (message.action === "clear") {
  //   if (!recorder) return;
  //   (async () => {
  //     await recorder.clear();
  //     sendResponse({ status: "clear" });
  //   })();
  //   return true;
  // }
});
