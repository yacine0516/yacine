import { BiArrowFromBottom } from "react-icons/bi";

import "./style.css";
type title = {
  nom?: string;
  onClick?: () => void;
  adress?: string;
  activity?: string;
  style?: boolean;
};

export const Btn = ({ nom }: title) => {
  return (
    <a href="/contact">
      <button className="btn_contact">{nom}</button>
    </a>
  );
};
export const Btn_About = ({ nom }: title) => {
  return (
    <a href="/contact">
      <button className="btn_about">{nom}</button>
    </a>
  );
};
export const Btn_Nav = ({ nom, adress }: title) => {
  return (
    <a href={adress}>
      <button className={`btn_nav`}>{nom}</button>
    </a>
  );
};

export const Btn_Top = ({ onClick, style }: title) => {
  return (
    <button onClick={onClick} className={style ? "btn_top" : "none"}>
      <BiArrowFromBottom style={{ color: "black", fontSize: 25 }} />
    </button>
  );
};
