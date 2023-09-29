import { Wrapper } from "../components/Wrapper";
import { VideoPlayer } from "../components/VideoPlayer";
import { Input } from "../components/Input";
import { Share } from "../components/Share";
import { Transcript } from "../components/Transcript";

export const VideoInfo = () => {
  return (
    <Wrapper>
      <div>
        <p className="mb-2 text-gray-500 tracking-wide">
          Links / link / <span className="text-primary">Active</span>
        </p>
        <h3 className="flex text-lg text-black font-bold gap-2 items-center mb-5">
          How To Create A Facebook Ad Listing{" "}
          <span>
            <img src="/videoPage/edit.svg" className="w-[20px]" />
          </span>
        </h3>
        <VideoPlayer />
        <div className="flex flex-col gap-6 w-full">
          <div className="flex md:flex-row flex-col justify-between items-center md:gap-20 gap-5">
            <Input
              bg="bg-primary50 h-[60px] w-full md:w-1/2"
              btStyles="bg-primary300 text-white rounded-lg"
              text="Send"
              placeholder="Enter the email of the reciever"
            />
            <Input
              bg="border-[1px] border-black h-[60px] w-full md:w-1/2"
              btStyles="rounded-lg  border-[1px] border-black"
              text="Copy URL"
              icon={<img src="/videoPage/copy.svg" className="w-[20px]" />}
            />
          </div>
          <Share />
          <Transcript data={[1, 2, 3, 4]} />
        </div>
      </div>
    </Wrapper>
  );
};
