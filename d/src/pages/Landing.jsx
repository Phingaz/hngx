import { Wrapper } from "../components/Wrapper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero2sub from "../assets/hero2sub.png";
import hero3sub from "../assets/hero3sub.png";
import feature from "../assets/videoFeature.png";
import placeholder from "../assets/placeholder.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const Landing = () => {
  const features = [
    {
      id: 1,
      title: "Simple Screen Recording",
      description:
        "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
      icon: "/hero/recordIcon.svg",
    },
    {
      id: 2,
      title: "Easy-to-Share URL",
      description:
        "Share your recordings instantly with a single link. No attachments, no downloads.",
      icon: "/hero/share.svg",
    },
    {
      id: 3,
      title: "Revisit Recordings",
      description:
        "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
      icon: "/hero/recycle.svg",
    },
  ];

  const howItWorks = [
    {
      id: 1,
      title: "Record Screen",
      description:
        'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
    },
    {
      id: 2,
      title: "Share Your Recording",
      description:
        "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    },
    {
      id: 3,
      title: "Learn Effortlessly",
      description:
        "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    },
  ];

  return (
    <Wrapper>
      <main
        id="landing"
        className="md:min-h-screen flex md:flex-row flex-col justify-center items-center gap-20"
      >
        <div className="md:flex-[4] flex flex-col gap-5 md:gap-10 justify-center items-start ">
          <h1 className="text-black font-bold text-4xl md:text-6xl">
            Show Them Don’t Just Tell
          </h1>
          <p className="text-gray-500">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button className="btn-main flex justify-center items-center gap-3 t hover:btn-link">
            Install HelpMeOut
            <span className="grid place-content-center">
              <ArrowRightAltIcon />
            </span>
          </button>
        </div>

        <div className="flex md:flex-[5] lg:flex-[7] md:flex-row gap-3 ">
          <div className="flex flex-col gap-3 h-[50%]">
            <div className="relative">
              <img src={hero1} className="w-full" />
              <img
                src={hero2sub}
                className="absolute block -top-6 -left-2 md:hidden md:top-0 md:-left-10 -z-10 w-full"
              />
            </div>
            <div className="relative w-full">
              <img src={hero2} className="w-full" />
              <img
                src={hero2sub}
                className="absolute hidden md:block md:top-0 md:-left-10 -z-10 w-full"
              />
            </div>
          </div>
          <div className="relative">
            <img src={hero3} alt="" className="w-full" />
            <img
              src={hero3sub}
              className="w-full absolute -bottom-4 -right-[0.75rem] md:-top-14 md:-right-10 -z-10"
            />
          </div>
        </div>
      </main>
      <div>
        <section
          id="features"
          className="flex flex-col justify-center items-center py-10"
        >
          <h1 className="font-bold text-3xl text-black mb-4">Features</h1>
          <h3 className="text-gray-600 mb-14 md:mb-28 md:text-left text-center">
            Key Highlights of Our Extension
          </h3>
          <div className="flex w-full md:flex-row flex-col gap-10">
            <div className="md:w-1/2 flex flex-col gap-8">
              {features.map((el) => (
                <div
                  key={el.id}
                  className="flex justify-start items-start gap-5"
                >
                  {<img src={el.icon} />}
                  <div>
                    <h6 className="font-bold text-primary">{el.title}</h6>
                    <p className="text-gray-500 text-sm font-light">
                      {el.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 ">
              <img src={feature} className="w-full" />
            </div>
          </div>
        </section>
        <section
          id="howitworks"
          className="flex flex-col justify-center items-center pb-10 md:pb-0 md:py-20 "
        >
          <h1 className="font-bold text-3xl text-black mb-10">How it works</h1>

          <div className="flex md:flex-row flex-col w-full gap-10">
            {howItWorks.map((el) => (
              <div
                key={el.id}
                className="flex flex-col gap-5 justify-center items-center text-center"
              >
                <p className="bg-primary w-[50px] aspect-square rounded-full  text-white font-bold grid place-content-center">
                  {el.id}
                </p>
                <h6 className="font-bold text-xl text-primary">{el.title}</h6>
                <p className="text-gray-500 text-sm font-light">
                  {el.description}
                </p>
                <img src={placeholder} className="w-full" />
              </div>
            ))}
          </div>
        </section>
        <a
          href="#landing"
          className="bg-primary text-white w-[50px] aspect-square grid place-content-center rounded-full text-4xl sticky bottom-5 right-5 animate-bounce  cursor-pointer shadow-md shadow-black"
        >
          <ArrowUpwardIcon className="" />
        </a>
      </div>
    </Wrapper>
  );
};
