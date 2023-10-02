/* eslint-disable react/prop-types */
export const Share = ({ text }) => {
  
  const share = [
    {
      id: 1,
      name: "Facebook",
      logo: <img src="/videoPage/facebook.svg" width={20} />,
      href: "https://www.facebook.com/sharer/sharer.php?u=",
    },
    {
      id: 2,
      name: "Whatsapp",
      logo: <img src="/videoPage/whatsapp.svg" width={20} />,
      href: "https://api.whatsapp.com/send?text=",
    },
    {
      id: 3,
      name: "Telegram",
      logo: <img src="/videoPage/telegram.svg" width={20} />,
      href: "https://t.me/share/url?url=",
    },
  ];

  return (
    <div>
      <h6 className="mb-1">Share your video</h6>
      <div className={`flex flex-wrap gap-4 justify-start items-center`}>
        {share.map((el) => (
          <button
            onClick={() => {
              navigator.clipboard.writeText(text);
              window.open(el.href + text, "_blank");
            }}
            key={el.id}
            className={`flex gap-2 items-center justify-center border-[1px] rounded-lg border-black px-4 py-2
              ${
                el.name === "Facebook" && "hover:bg-blue-500 hover:text-white t"
              }
              ${
                el.name === "Whatsapp" &&
                "hover:bg-green-300 hover:text-white t"
              }
              ${
                el.name === "Telegram" && "hover:bg-blue-300 hover:text-white t"
              }              
              `}
          >
            {el.logo} {el.name}
          </button>
        ))}
      </div>
    </div>
  );
};
