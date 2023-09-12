import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <footer className="w-[min(90%,1300px)] mx-auto pb-20 text-center">
      <div className="flex gap-5 justify-center items-center mb-4">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>
      <div className="flex gap-2 sm:gap-5 flex-col sm:flex-row justify-center items-center mb-4">
        <p className="font-bold">Conditions of Use</p>
        <p className="font-bold">Privacy & Policy</p>
        <p className="font-bold">Press Room</p>
      </div>
      <p className="font-semibold text-gray-400">
        © 2023 MovieBox by Prosper Pii{" "}
      </p>
    </footer>
  );
};
