import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState } from "react";

export const Control = () => {
  const color = { color: "#120B48" };
  const controls = [
    { id: 2, icon: <StopIcon sx={color} />, text: "Stop" },
    { id: 4, icon: <VideocamOutlinedIcon sx={color} />, text: "Video" },
    { id: 5, icon: <MicNoneOutlinedIcon sx={color} />, text: "Audio" },
  ];

  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="fixed top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white flex justify-evenly items-center gap-5 rounded-[50px] px-5 py-2 mainShadw z-50">
      <div className="flex justify-center items-center gap-3 border-r-[1px] pr-4 min-h-[50px]">
        <p>00:03:45</p>
        <span className="w-[9px] h-[9px] bg-red-700 aspect-square shadw rounded-full"></span>
      </div>

      <div className="flex gap-3">
        <span className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <span className="rounded-full grid place-content-center bg-white w-[40px] aspect-square">
            {isPlaying ? (
              <PauseIcon sx={color} />
            ) : (
              <PlayArrowIcon sx={color} />
            )}
          </span>
          <p className="text-xs">{isPlaying ? "Pause" : "Play"}</p>
        </span>
        {controls.map((el) => (
          <span
            key={el.id}
            className="flex flex-col justify-center items-center gap-1 cursor-pointer"
          >
            <span className="rounded-full grid place-content-center bg-white w-[40px] aspect-square">
              {el.icon}
            </span>
            <p className="text-xs">{el.text}</p>
          </span>
        ))}
        <span className="rounded-full grid place-content-center bg-zinc-700 w-[40px] h-[40px] aspect-square cursor-pointer ">
          <DeleteOutlineOutlinedIcon sx={{ color: "grey" }} />
        </span>
      </div>
    </div>
  );
};
