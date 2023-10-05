import { Link } from "react-router-dom";
import { Share } from "../components/Share";
import { VideoPlayer } from "../components/VideoPlayer";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { Transcript } from "../components/Transcript";
import { Loader } from "../components/Loader";
import { useParams } from "react-router-dom";

export const VideoPage = () => {
  const { id } = useParams();
  const [videoId, setVideoId] = useState(id);
  const [url, setUrl] = useState("http://");
  const [videoName, setVideoName] = useState("video name");
  // const [transcript, setTranscript] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [rename, setRename] = useState(false);
  const [error, setError] = useState({
    state: false,
    message: null,
  });

  useEffect(() => {
    setIsLoading(false);
    // const backend = `https://seashell-app-4jicj.ondigitalocean.app/api`;
    const backend = `https://hngx-chrome-extension-api.onrender.com/api`;

    const getVideo = async () => {
      // setIsLoading(true);
      try {
        const response = await fetch(`${backend}/video/${videoId}`);
        const data = await response.json();
        setVideoName(data.data.id);
        setUrl(data.data.videoPath);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError({
          state: true,
          message: error,
        });
        setIsLoading(false);
      }
    };

    // getVideo();
  }, []);

  const copy = (e) => {
    setCopied(true);
    navigator.clipboard.writeText(e);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
    console.log(e);
  };

  const handleChange = (e) => {
    setVideoName(e.target.value);
  };

  return isLoading ? (
    <Loader text="Your video is still being processed" />
  ) : (
    <Wrapper>
      <section className="flex md:flex-row flex-col gap-20 w-full">
        <div className="md:w-1/2 flex flex-col gap-8">
          <h1 className="text-black text-4xl font-bold">
            {error.state
              ? "Something went wrong, please try again later"
              : "Your video is ready"}
          </h1>
          <div>
            <p className="flex  gap-3 text-gray-500">
              Video name:
              <span className="text-primary400 font-semibold flex text-center gap-2">
                {videoName}{" "}
                <img
                  className="cursor-pointer"
                  src="/videoPage/edit.svg"
                  width={25}
                  onClick={() => setRename((p) => !p)}
                />
              </span>
            </p>
          </div>
          {rename && (
            <div
              className={`bg-primary50 flex items-center py-2 px-4 rounded-lg`}
            >
              <input
                type="text"
                name="url"
                value={videoName}
                className="w-full bg-transparent font-light h-full outline-none border-0"
                onChange={handleChange}
              />

              <button
                className={`flex min-w-fit gap-2 justify-center items-center text-white px-4 py-2 bg-primary300 rounded-lg`}
              >
                Rename
              </button>
            </div>
          )}
          <div>
            <h6 className="mb-2 font-bold">Video Url</h6>

            <div
              className={`border-[1px] border-gray-400 flex items-center py-2 px-4 rounded-lg`}
            >
              <input
                readOnly={true}
                value={url}
                className="w-full bg-transparent font-light h-full outline-none border-0"
              />
              <button
                className={`flex min-w-fit gap-2 justify-center items-center text-black px-4 py-2 border-[1px] border-black rounded-lg`}
                onClick={() => copy(url)}
              >
                <img src="/videoPage/copy.svg" width={20} />
                Copy
              </button>
            </div>
            <p className="text-xs mt-2 ml-1 text-green-700 animate-fadeIn min-h-[17px]">
              {copied && "Copied"}
            </p>
          </div>
          <div>
            <Share text={url} />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-10">
          {error.state ? (
            <p className="text-red-500">{error.message}</p>
          ) : (
            <>
              <VideoPlayer url={url} />
              <Transcript transcript={""} />
            </>
          )}
        </div>
      </section>
      <section className="flex w-full justify-center items-center flex-col py-20 gap-10 md:gap-6">
        <h5 className="text-black font-bold md:max-w-[39%] text-center">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </h5>
        {error.state ? (
          ""
        ) : (
          <Link to="/login" className="btn-main">
            Save the Video
          </Link>
        )}
        <p className="text-gray-500 font-semibold text-center">
          Don&rsquo;t have an account?{" "}
          <Link to="/login" className="text-primary underline font-bold">
            Create an account
          </Link>
        </p>
      </section>
    </Wrapper>
  );
};
