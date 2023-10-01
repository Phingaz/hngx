/* eslint-disable react/prop-types */
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";

export const Control = ({
  time,
  isPlaying,
  video,
  audio,
  pause,
  resume,
  stop,
  clear,
}) => {
  const color = { color: "#120B48" };
  const controls = [
    { id: 2, icon: <StopIcon sx={color} />, text: "Stop", function: stop },
    {
      id: 4,
      icon: video ? (
        <VideocamOutlinedIcon sx={color} />
      ) : (
        <VideocamOffOutlinedIcon sx={color} />
      ),
      text: "Video",
      function: () => null,
    },
    {
      id: 5,
      icon: audio ? (
        <MicNoneOutlinedIcon sx={color} />
      ) : (
        <MicOffOutlinedIcon sx={color} />
      ),
      text: "Audio",
      function: () => null,
    },
  ];

  return (
    <div className="fixed md:flex-row flex-col flex top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white justify-evenly items-center gap-5 rounded-[50px] px-5 py-2 mainShadw z-[1000000000000000]">
      <div className="flex justify-center items-center gap-3 border-r-[1px] pr-4 min-h-[50px]">
        <p>{time}</p>
        <span className="w-[9px] h-[9px] bg-red-700 aspect-square shadw rounded-full"></span>
      </div>
      <p id="control"></p>
      <div className="flex gap-3">
        <span className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <span className="rounded-full grid place-content-center bg-white w-[40px] aspect-square">
            {isPlaying ? (
              <PauseIcon sx={color} onClick={() => pause()} />
            ) : (
              <PlayArrowIcon sx={color} onClick={() => resume()} />
            )}
          </span>
          <p className="text-xs">{isPlaying ? "Pause" : "Play"}</p>
        </span>
        {controls.map((el) => (
          <span
            key={el.id}
            className="flex flex-col justify-center items-center gap-1 cursor-pointer"
            onClick={() => el.function()}
          >
            <span className="rounded-full grid place-content-center bg-white w-[40px] aspect-square">
              {el.icon}
            </span>
            <p className="text-xs">{el.text}</p>
          </span>
        ))}
        <span className="rounded-full grid place-content-center bg-zinc-700 w-[40px] h-[40px] aspect-square cursor-pointer ">
          <DeleteOutlineOutlinedIcon
            sx={{ color: "grey" }}
            onClick={() => clear()}
          />
        </span>
      </div>
    </div>
  );
};
