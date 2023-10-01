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

  return "Recording started";
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    const audio = message.audio;
    const currentTab = message.currentTab;
    (async () => {
      // const stream = await startRecorder(audio, currentTab);
      // const data = await onAccessApproved(stream);
      sendResponse({ status: "started" });
      //fetch(chrome.runtime.getURL("/control.html"))
        //.then((r) => r.text())
        //.then((html) => {
          //document.body.insertAdjacentHTML("beforeend", html);
        //});
      //chrome.runtime.sendMessage({ action: "started" });
    })();
    return true;
  }
  if (message.action === "stop") {
    if (!recorder) return;
    (async () => {
      await recorder.stop();
      sendResponse({ status: "stopped" });
    })();
    return true;
  }
  if (message.action === "pause") {
    if (!recorder) return;
    (async () => {
      await recorder.pause();
      sendResponse({ status: "pause" });
    })();
    return true;
  }
  if (message.action === "resume") {
    if (!recorder) return;
    (async () => {
      await recorder.resume();
      sendResponse({ status: "resume" });
    })();
    return true;
  }
  if (message.action === "clear") {
    if (!recorder) return;
    (async () => {
      await recorder.clear();
      sendResponse({ status: "clear" });
    })();
    return true;
  }
});

const addBtns = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");

    const fragment = document.createDocumentFragment();

    const control = document.createElement("div");
    control.id = "controlHelpMeOut";
    control.className = "controlHelpMeOut";

    const template = `
      <div class="time">
        <p>00:00:00</p>
        <span class="dot"></span>
      </div>

      <div class="btn-wrapper">
        <div class="btn">
          <span><img src="pause.svg" /></span>
          <p>Pause</p>
        </div>
      </div>
    `;
    control.innerHTML = template;

    // Append the control element to the fragment
    fragment.appendChild(control);

    // Insert the fragment into the body of the document
    body.appendChild(fragment);
  });
};

const loadexternal = () => {
};
