var recorder = null;




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
      window.open("https://hngxfour1.netlify.app/", "_blank");
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

  return "Recording started";
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    const audio = message.audio;
    const currentTab = message.currentTab;
    (async () => {
      const stream = await startRecorder(audio, currentTab);
      const data = await onAccessApproved(stream);
      sendResponse({ status: data });
      addBtns()
    })();
    return true;
  }
  if (message.action === "stop") {
    if (!recorder) return;
    (async () => {
      recorder.stop();
      sendResponse({ status: "stopped" });
    })();
    return true;
  }
  if (message.action === "pause") {
    if (!recorder) return;
    (async () => {
      recorder.pause();
      sendResponse({ status: "pause" });
    })();
    return true;
  }
  if (message.action === "resume") {
    if (!recorder) return;
    (async () => {
      recorder.resume();
      sendResponse({ status: "resume" });
    })();
    return true;
  }
  if (message.action === "clear") {
    if (!recorder) return;
    (async () => {
      recorder.clear();
      sendResponse({ status: "clear" });
    })();
    return true;
  }
});
