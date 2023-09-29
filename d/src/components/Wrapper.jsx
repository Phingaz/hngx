/* eslint-disable react/prop-types */
import { Header } from "./Navs/Header";
import { Footer } from "./Footer";

export const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-[130px] mx-auto w-[min(90vw,1300px)] relative">{children}</div>
      <Footer />
    </>
  );
};
