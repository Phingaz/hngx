/* eslint-disable react/prop-types */
import { LoggedInHeader } from "./Navs/LoggedInHeader";

export const LoggedInWrapper = ({ children }) => {
  return (
    <>
      <LoggedInHeader />
      <div className="mt-[130px] mx-auto w-[min(90vw,1300px)] relative">
        {children}
      </div>
    </>
  );
};
