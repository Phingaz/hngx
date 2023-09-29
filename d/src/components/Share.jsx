export const Share = () => {
  const share = [
    {
      id: 1,
      name: "Facebook",
      logo: <img src="/videoPage/facebook.svg" width={20} />,
    },
    {
      id: 2,
      name: "Whatsapp",
      logo: <img src="/videoPage/whatsapp.svg" width={20} />,
    },
    {
      id: 3,
      name: "Telegram",
      logo: <img src="/videoPage/telegram.svg" width={20} />,
    },
  ];
  return (
    <div>
      <h6 className="mb-1">Share your video</h6>
      <div className="flex flex-wrap gap-4 justify-start items-center">
        {share.map((el) => (
          <a
            key={el.id}
            className="flex gap-2 items-center justify-center border-[1px] rounded-lg border-black px-4 py-2"
          >
            {el.logo} {el.name}
          </a>
        ))}
      </div>
    </div>
  );
};
