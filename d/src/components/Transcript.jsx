/* eslint-disable react/prop-types */
import { DropDown } from "../components/DropDown";

export const Transcript = ({ data, time }) => {
  return (
    <div className="flex w-full justify-start items-start flex-col pb-10 gap-4">
      <h3>Transcript</h3>
      <DropDown />
      {data?.map((el, i) => {
        const lastItem = data.length - 1;
        return (
          <div key={el.id} className="flex justify-start items-start gap-5">
            <p className="text-black font-semibold">{time}</p>
            <div>
              <p
                className={`text-gray-900 text-sm font-normal ${
                  i === lastItem ? "opacity-25" : "opacity-100"
                }`}
              >
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                . Open Facebook on your desktop or mobile device and locate
                "Marketplace" in the left-ha
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
