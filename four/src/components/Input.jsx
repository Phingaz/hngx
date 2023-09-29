/* eslint-disable react/prop-types */
//

export const Input = ({ btStyles, bg, icon, text, placeholder }) => {
  return (
    <div className={`${bg} flex items-center py-2 px-4 rounded-lg`}>
      <input
        className="w-full bg-transparent font-light h-full outline-none border-0"
        placeholder={placeholder}
      />
      <button
        className={`flex min-w-fit gap-2 justify-center items-center text-black px-4 py-2 ${btStyles}`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
};
