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

const pauseRecorder = (recorder) => {
  recorder.pause();
};

const resumeRecorder = (recorder) => {
  recorder.resume();
};

const stopRecorder = (recorder) => {
  recorder.stop();
};

let isPlaying = false;
let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const pauseSvg = `<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L1 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
<path d="M9 1.5L9 12.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
const playSvg = `<svg width="128" height="128" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="icon">
<path fill="" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z"/>
</svg>
`;
const stopSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 3.5C1.25 2.25736 2.25736 1.25 3.5 1.25H12.5C13.7426 1.25 14.75 2.25736 14.75 3.5V12.5C14.75 13.7426 13.7426 14.75 12.5 14.75H3.5C2.25736 14.75 1.25 13.7426 1.25 12.5V3.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const micSvg = `<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 18.75C10.3137 18.75 13 16.0637 13 12.75V11.25M7 18.75C3.68629 18.75 1 16.0637 1 12.75V11.25M7 18.75V22.5M3.25 22.5H10.75M7 15.75C5.34315 15.75 4 14.4069 4 12.75V4.5C4 2.84315 5.34315 1.5 7 1.5C8.65685 1.5 10 2.84315 10 4.5V12.75C10 14.4069 8.65685 15.75 7 15.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
const videoSvg = `<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.75 6.5L19.4697 1.78033C19.9421 1.30786 20.75 1.64248 20.75 2.31066V13.6893C20.75 14.3575 19.9421 14.6921 19.4697 14.2197L14.75 9.5M3.5 14.75H12.5C13.7426 14.75 14.75 13.7426 14.75 12.5V3.5C14.75 2.25736 13.7426 1.25 12.5 1.25H3.5C2.25736 1.25 1.25 2.25736 1.25 3.5V12.5C1.25 13.7426 2.25736 14.75 3.5 14.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
const trashSvg = `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7404 8L11.3942 17M6.60577 17L6.25962 8M16.2276 4.79057C16.5696 4.84221 16.9104 4.89747 17.25 4.95629M16.2276 4.79057L15.1598 18.6726C15.0696 19.8448 14.0921 20.75 12.9164 20.75H5.08357C3.90786 20.75 2.93037 19.8448 2.8402 18.6726L1.77235 4.79057M16.2276 4.79057C15.0812 4.61744 13.9215 4.48485 12.75 4.39432M0.75 4.95629C1.08957 4.89747 1.43037 4.84221 1.77235 4.79057M1.77235 4.79057C2.91878 4.61744 4.07849 4.48485 5.25 4.39432M12.75 4.39432V3.47819C12.75 2.29882 11.8393 1.31423 10.6606 1.27652C10.1092 1.25889 9.55565 1.25 9 1.25C8.44435 1.25 7.89078 1.25889 7.33942 1.27652C6.16065 1.31423 5.25 2.29882 5.25 3.47819V4.39432M12.75 4.39432C11.5126 4.2987 10.262 4.25 9 4.25C7.73803 4.25 6.48744 4.2987 5.25 4.39432" stroke="#BEBEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const micInactive = ` <svg width="20px" height="20px" viewBox="-3.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>microphone-off</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-154.000000, -307.000000)" fill="#000000">
            <path d="M167,333 C165.061,333 163.236,332.362 161.716,331.318 L160.31,332.742 C161.944,333.953 163.892,334.765 166,334.955 L166,337 L165,337 C164.448,337 164,337.448 164,338 C164,338.553 164.448,339 165,339 L169,339 C169.552,339 170,338.553 170,338 C170,337.448 169.552,337 169,337 L168,337 L168,334.955 C172.938,334.51 177.117,330.799 178,326 L176,326 C175.089,330.007 171.282,333 167,333 L167,333 Z M167,329 C166.136,329 165.334,328.761 164.625,328.375 L163.168,329.85 C164.27,330.572 165.583,331 167,331 C170.866,331 174,327.866 174,324 L174,318.887 L172,320.911 L172,324 C172,326.762 169.761,329 167,329 L167,329 Z M162,314 C162,311.238 164.239,309 167,309 C169.174,309 171.005,310.396 171.694,312.334 L173.198,310.812 C172.035,308.558 169.711,307 167,307 C163.134,307 160,310.134 160,314 L160,324 C160,324.053 162,322.145 162,322.145 L162,314 L162,314 Z M177.577,310.013 L153.99,332.597 L155.418,334.005 L179.014,311.433 L177.577,310.013 L177.577,310.013 Z M158.047,326.145 C158.035,326.095 158.011,326.05 158,326 L156,326 C156.109,326.596 156.271,327.175 156.478,327.733 L158.047,326.145 L158.047,326.145 Z" id="microphone-off" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg>`;

function updateTimer(hoursDisplay, minutesDisplay, secondsDisplay) {
  const currentTime = Date.now();
  elapsedTime = Math.floor((currentTime - startTime) / 1000);

  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  hoursDisplay.textContent = String(hours).padStart(2, "0");
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function startTimer(hoursDisplay, minutesDisplay, secondsDisplay) {
  isPlaying = true;
  if (!isRunning) {
    startTime = Date.now() - elapsedTime * 1000;
    timerInterval = setInterval(() => {
      updateTimer(hoursDisplay, minutesDisplay, secondsDisplay);
    }, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  isPlaying = false;
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resumeTimer(hoursDisplay, minutesDisplay, secondsDisplay) {
  isPlaying = true;
  if (!isRunning) {
    startTime = Date.now() - elapsedTime * 1000;
    timerInterval = setInterval(() => {
      updateTimer(hoursDisplay, minutesDisplay, secondsDisplay);
    }, 1000);
    isRunning = true;
  }
}

function clearRecordingAndTimer() {
  // Stop the timer
  clearInterval(timerInterval);
  isRunning = false;

  // Reset the displayed timer
  const hoursDisplay = document.querySelector(".hours");
  const minutesDisplay = document.querySelector(".minutes");
  const secondsDisplay = document.querySelector(".seconds");
  hoursDisplay.textContent = "00";
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
}

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

      const pauseControl = document.querySelector(".pause");
      const stopControl = document.querySelector(".stop");
      const trashControl = document.querySelector(".trash");
      const videoControl = document.querySelector(".video");
      const micControl = document.querySelector(".mic");
      const hoursDisplay = document.querySelector(".hours");
      const minutesDisplay = document.querySelector(".minutes");
      const secondsDisplay = document.querySelector(".seconds");
      const pauseText = document.querySelector(".pauseText");
      const timer = document.querySelector("#controlHelpMeOut");

      startTimer(hoursDisplay, minutesDisplay, secondsDisplay);

      pauseControl.innerHTML = pauseSvg;
      stopControl.innerHTML = stopSvg;
      trashControl.innerHTML = trashSvg;
      videoControl.innerHTML = videoSvg;
      micControl.innerHTML = audio ? micSvg : micInactive;

      pauseControl.addEventListener("click", () => {
        if (isPlaying) {
          pauseControl.innerHTML = playSvg;
          pauseText.textContent = "Resume";
          pauseRecorder(recorder);
          pauseTimer(hoursDisplay, minutesDisplay, secondsDisplay);
        } else {
          pauseControl.innerHTML = pauseSvg;
          pauseText.textContent = "Pause";
          resumeRecorder(recorder);
          resumeTimer(hoursDisplay, minutesDisplay, secondsDisplay);
        }
      });
      stopControl.addEventListener("click", () => {
        stopRecorder(recorder);
      });
      trashControl.addEventListener("click", () => {
        clearRecordingAndTimer();
        document.body.removeChild(timer);
        window.location.reload();
      });
    })();
    return true;
  }
});
