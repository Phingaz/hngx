import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import Toggle from "./Toggle";
import { useState } from "react";

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

  const [screen, setScreen] = useState("full");
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(false);

  const handleScreen = (e) => {
    setScreen(e.target.id);
  };

  return (
    <main className="w-[350px] flex flex-col gap-4">
      <div className="flex flex-col justify-center items-start w-full gap-5 py-5 px-7">
        <a className="flex justify-between items-center w-full" href="https://hngxfour1.netlify.app" target="_blank" rel="noreferrer">
          <div className="flex gap-2 justify-center items-center t hover:link">
            <img src="/icons/icon.png" className="w-[30px]" />
            <h1 className="text-xl font-semibold">HelpMeOut</h1>
          </div>
          <div className="flex gap-2">
            <span className="t hover:link">
              <SettingsOutlinedIcon sx={smIcon} />
            </span>
            <span className="t hover:text-primary">
              <CancelOutlinedIcon
                sx={smIcon}
                className="opacity-25 t hover:opacity-100 hover:t"
              />
            </span>
          </div>
        </a>
        <p className="my-2 text-[#413c6d]">
          This extension helps you record and share help videos with ease.
        </p>
        <div className="flex justify-center items-center w-full gap-10">
          <div
            onClick={handleScreen}
            className={`t hover:link flex flex-col justify-center items-center ${
              screen === "full" ? "active" : "inactive"
            }`}
          >
            <span>
              <DesktopWindowsRoundedIcon id="full" sx={largeIcon} />
            </span>
            <p className="font-semibold">Full screen</p>
          </div>
          <div
            onClick={handleScreen}
            className={`t hover:link flex flex-col justify-center items-center ${
              screen === "tab" ? "active" : "inactive"
            }`}
          >
            <span>
              <img
                id="tab"
                onClick={handleScreen}
                src="copy.svg"
                className={`w-[60px] t hover:link ${
                  screen === "tab" ? "active" : "inactive"
                }`}
              />
            </span>
            <p className="font-semibold">Current Tab</p>
          </div>
        </div>
        <div className="flex justify-between w-full border-2 border-primary rounded-2xl p-3">
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

        <button className="bg-primary w-full text-white rounded-2xl h-[50px]">
          Start Recording
        </button>
      </div>
    </main>
  );
};
