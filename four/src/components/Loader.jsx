/* eslint-disable react/prop-types */
import styled from "./Loader.module.css";

export const Loader = ({text}) => {
  return (
    <div className={styled.loader}>
      <div className={styled.custom_loader}></div>
      <p>{text}...</p>
    </div>
  );
};
