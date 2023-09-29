import { Input } from "../components/Input";
import { Share } from "../components/Share";
import { VideoPlayer } from "../components/VideoPlayer";
import { Wrapper } from "../components/Wrapper";

export const VideoPage = () => {
  return (
    <Wrapper>
      <section className="flex md:flex-row flex-col gap-20 w-full">
        <div className="md:w-1/2 flex flex-col gap-8">
          <h1 className="text-black text-4xl font-bold">
            Your video is ready!
          </h1>
          <div>
            <p className="text-gray-500">Name</p>
            <p className="text-primary400 font-semibold flex text-center gap-2">
              Untitled_Video_20232509{" "}
              <img src="/videoPage/edit.svg" width={25} />
            </p>
          </div>
          <Input
            btStyles="bg-primary300 rounded-lg text-white"
            bg="bg-primary50"
            text="Send"
          />
          <div>
            <h6 className="mb-2 font-bold">Video Url</h6>
            <Input
              btStyles="border-[1px] border-black rounded-lg"
              bg="border-[1px] border-gray-400 rounded-lg"
              icon={<img src="/videoPage/copy.svg" width={20} />}
              text="Copy"
            />
          </div>
          <div>
            <Share />
          </div>
        </div>
        <div className="md:w-1/2">
          <VideoPlayer />
        </div>
      </section>
      <section className="flex w-full justify-center items-center flex-col py-20 gap-10 md:gap-6">
        <h5 className="text-black font-bold md:max-w-[39%] text-center">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </h5>
        <button className="btn-main">Save the Video</button>
        <p className="text-gray-500 font-semibold text-center">
          Don&rsquo;t have an account?{" "}
          <span className="text-primary underline font-bold">
            Create an account
          </span>
        </p>
      </section>
    </Wrapper>
  );
};
