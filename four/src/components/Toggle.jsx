/* eslint-disable react/prop-types */
function Toggle({ state, setState }) {
  const toggleClass = " transform translate-x-7 bg-primary";
  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-primary rounded-full p-1 cursor-pointer"
        onClick={() => {
          setState(!state);
        }}
      >
        <div
          className={
            "bg-white aspect-square h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
            (state ? null : toggleClass)
          }
        ></div>
      </div>
    </div>
  );
}

export default Toggle;
