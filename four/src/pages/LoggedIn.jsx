import { LoggedInWrapper } from "../components/LoggedInWrapper";
import v from "../assets/videoFrame.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const LoggedIn = () => {
  function formatTimestamp(inputTimestamp) {
    // Create a Date object from the input timestamp
    const date = new Date(inputTimestamp);

    // Define arrays for month names and day names
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];

    // Get the month, day, year, and time components
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format the date and time
    const formattedDate = `${month} ${day}, ${year} at ${hours}:${minutes}`;

    return formattedDate;
  }

  // const { id } = useParams();
  // const [videoId, setVideoId] = useState(id);
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
  const items = [
    {
      id: 1,
      title: "How to create Facebook Ad listing",
      date: "SEPTEMBER 23, 2023",
      img: v,
    },
    {
      id: 2,
      title: "How to create Facebook Ad listing",
      date: "SEPTEMBER 23, 2023",
      img: v,
    },
  ];

  useEffect(() => {
    const backend = `https://seashell-app-4jicj.ondigitalocean.app/api`;
    const getVideo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${backend}/videos`);
        const data = await response.json();
        // setVideoName(data.data.id);
        // setUrl(data.data.videoPath);
        // setIsLoading(false);
        console.log(data);
      } catch (error) {
        setError({
          state: true,
          message: error,
        });
        setIsLoading(false);
      }
    };

    // getVideo();
  }, []);

  return (
    <LoggedInWrapper>
      <section>
        <div className="flex md:flex-row flex-col md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-black">Hello, John Mark</h1>
            <p className="text-gray-500">Here are your recorded videos </p>
          </div>
          <div className="h-[60px] md:min-w-[350px] bg-red-50 rounded-lg flex justify-center items-center px-4 ">
            <img src="/loggedIn/search-normal.svg" className="w-[30px]" />
            <input
              className="h-full w-full font-light bg-transparent outline-none pl-5 text-gray-500"
              placeholder="Search for a particular video"
            />
          </div>
        </div>
        <hr className="my-10" />

        <div className="my-10">
          <div className="md:mb-5 mb-2 flex justify-between items-center">
            <p className="text-gray-600 ">Recent</p>
            <Link>See more</Link>
          </div>
          <div className="grid md:grid-cols-2 grid-rows-1 gap-7 md:gap-10 grid-cols-1 ">
            {items.map((item) => (
              <div key={item.id} className="w-full">
                <img src={v} className="w-full mb-2 md:mb-5" />
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-black text-sm md:text-base font-semibold">
                      How to create Facebook Ad listing
                    </h3>
                    <p className="text-gray-400 font-light text-sm">
                      SEPTEMBER 23, 2023
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src="/loggedIn/link.svg"
                      className="md:w-[30px] w-[25px] cursor-pointer"
                    />
                    <img
                      src="/loggedIn/more.svg"
                      className="md:w-[30px] w-[25px] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LoggedInWrapper>
  );
};
