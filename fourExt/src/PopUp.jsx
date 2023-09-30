import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import Toggle from "./Toggle";
import { useState, useEffect } from "react";
import { Control } from "./Control";

export const PopUp = () => {
  const largeIcon = {
    fontSize: 60,
  };
  const mdIcon = {
    fontSize: 35,
    fontWeight: "thin",
  };
  const smIcon = {
    fontSize: 28,
  };

  const [currentTab, setCurrentTab] = useState(true);
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(false);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isPaused, setPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [settings, setSettings] = useState(true);

  useEffect(() => {
    if (recording && !isPaused) {
      const startTime = Date.now();
      const intervalId = setInterval(() => {
        const newElapsedTime = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(time !== 0 ? time + newElapsedTime : newElapsedTime);
      }, 1000);

      setTimerInterval(intervalId);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [recording, isPaused]);

  const handleScreen = () => {
    setError(null);
    setCurrentTab((p) => !p);
  };

  const start = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (video) {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              action: "start",
              video: video,
              audio: audio,
              currentTab: currentTab,
            },

            function (response) {
              if (!chrome.runtime.lastError) {
                startControl();
              } else {
                console.error(chrome.runtime.lastError);
              }
            }
          );
        } else {
          console.log("No active tab");
        }
      } else {
        setError("Video must be requested");
      }
    });
  };

  const stop = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "stop" },
          function (response) {
            if (!chrome.runtime.lastError) {
              stopControl();
            } else {
              console.error(chrome.runtime.lastError);
            }
          }
        );
      } else {
        console.log("No active tab");
      }
    });
  };

  const pause = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "pause" },
          function (response) {
            if (!chrome.runtime.lastError) {
              pauseControl();
            } else {
              console.error(chrome.runtime.lastError);
            }
          }
        );
      } else {
        console.log("No active tab");
      }
    });
  };

  const resume = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "resume" },
          function (response) {
            if (!chrome.runtime.lastError) {
              resumeControl();
            } else {
              console.error(chrome.runtime.lastError);
            }
          }
        );
      } else {
        console.log("No active tab");
      }
    });
  };

  const clear = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "clear" },
          function (response) {
            if (!chrome.runtime.lastError) {
              clearControl();
            } else {
              console.error(chrome.runtime.lastError);
            }
          }
        );
      } else {
        console.log("No active tab");
      }
    });
  };

  const startControl = () => {
    setRecording(true);
  };

  const stopControl = () => {
    clearInterval(timerInterval);
  };

  const pauseControl = () => {
    setPaused(true);
    setTime(elapsedTime);
  };

  const resumeControl = () => {
    setPaused(false);
    setElapsedTime(time);
  };

  const clearControl = () => {
    setRecording(false);
    setPaused(false);
    setElapsedTime(0);
    clearInterval(timerInterval);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const closePopup = () => {
    window.close();
  };

  return (
    <main className="min-w-[350px] flex flex-col gap-4">
      {recording && (
        <Control
          pause={pause}
          resume={resume}
          clear={clear}
          stop={stop}
          time={formatTime(elapsedTime)}
          isPlaying={recording}
          video={video}
          audio={audio}
        />
      )}
      <div className="flex flex-col justify-center items-start w-full gap-5 py-5 px-7">
        <button className="flex justify-between items-center w-full">
          <div className="flex gap-2 justify-center items-center t hover:link">
            <img src="icon.png" className="w-[30px]" />
            <h1 className="text-xl font-semibold">HelpMeOut</h1>
          </div>
          <div className="flex gap-2">
            <button
              className="t hover:link"
              onClick={() => setSettings((p) => !p)}
            >
              <SettingsOutlinedIcon sx={smIcon} />
            </button>
            <span className="t hover:text-primary" onClick={closePopup}>
              <CancelOutlinedIcon
                sx={smIcon}
                className="opacity-25 t hover:opacity-100 hover:t"
              />
            </span>
          </div>
        </button>
        <p className="my-2 text-[#413c6d]">
          This extension helps you record and share help videos with ease.
        </p>
        <div className="flex justify-center items-center w-full gap-10">
          <div
            onClick={handleScreen}
            className={`t flex flex-col justify-center items-center ${
              !currentTab ? "active" : "inactive"
            }`}
          >
            <span>
              <DesktopWindowsRoundedIcon id="full" sx={largeIcon} />
            </span>
            <p className="font-semibold cursor-text">Full screen</p>
          </div>
          <div
            onClick={handleScreen}
            className={`t hover:link flex flex-col justify-center items-center ${
              currentTab ? "active" : "inactive"
            }`}
          >
            <span>
              <img
                id="tab"
                src="copy.svg"
                className={`w-[60px] t hover:link ${
                  currentTab ? "active" : "inactive"
                }`}
              />
            </span>
            <p className="font-semibold cursor-text">Current Tab</p>
          </div>
        </div>

        {settings && (
          <div className="w-full">
            <div className="flex justify-between w-full border-2 border-primary rounded-2xl p-3 mb-5">
              <div className="flex justify-center items-center gap-2">
                <span>
                  <VideocamOutlinedIcon sx={mdIcon} />
                </span>
                <p className="font-semibold">Video</p>
              </div>
              <Toggle state={video} setState={setVideo} />
            </div>
            <div className="flex justify-between w-full border-2 border-primary rounded-2xl p-3">
              <div className="flex justify-center items-center gap-2">
                <span>
                  <MicNoneOutlinedIcon sx={mdIcon} />
                </span>
                <p className="font-semibold">Audio</p>
              </div>
              <Toggle state={audio} setState={setAudio} />
            </div>
          </div>
        )}
        <button
          onClick={start}
          className="bg-primary w-full text-white rounded-2xl h-[50px] hover:btn-link"
        >
          Start Recording
        </button>
        {error && (
          <p className="text-red-500 text-center text-sm font-semibold">
            {error}
          </p>
        )}
      </div>
    </main>
  );
};
