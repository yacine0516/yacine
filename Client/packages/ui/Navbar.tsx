import { Btn_Nav } from "./Button";
import "./style.css";
import { useStore } from "./ButtonStore";
import Logo from "../img/logo.png";
import Image from "next/image";
export const Navbar = () => {
  const store = useStore();
  return (
    <nav className="navbar">
      <div className="container">
        <Image src={Logo} alt="logo" width={200} height={70} />

        <div className="container_btn">
          <Btn_Nav
            nom={"Accuille"}
            adress={"accuille"}
            activity={store.theme}
          />

          <Btn_Nav
            activity={store.theme}
            nom={"A props nous"}
            adress={"about"}
          />
          <Btn_Nav
            activity={store.theme}
            onClick={() => store.settheme()}
            nom={"Contact"}
            adress={"contact"}
          />
        </div>
      </div>
    </nav>
  );
};
