/* eslint-disable react/prop-types */

export const VideoPlayer = ({ url }) => {
  return (
    <iframe
      className="w-full min-h-[400px] b"
      src={url}
      title="Screen Recording"
    ></iframe>
  );
};
