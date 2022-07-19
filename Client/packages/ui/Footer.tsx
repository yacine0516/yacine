import Link from "next/link";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_el">
          <h4>Réseau Sociaux</h4>
          <a href="https://facebook.com">
            <BsFacebook
              style={{ color: "black", fontSize: 40 }}
              name="Facebook"
            />
          </a>
        </div>
        <div className="footer_el">
          <h4>Notre Adresse </h4>
          <p>Rue 20 Bab-El Oued Alger</p>
        </div>
        <div className="footer_el">
          <h4 style={{ color: "#e71717" }}>Contact </h4>
          <div className="footer_numb">
            <BsFillTelephoneFill style={{ marginRight: 10, fontSize: 18 }} />
            Télephone : 07 87 43 43 73
          </div>
          <div className="footer_numb">
            <AiOutlineMail style={{ marginRight: 12, fontSize: 18 }} /> Email :
            bouzirmadrid@gmail.com
          </div>
        </div>
      </div>
      <div
        className="bottom"
        style={{
          color: "black",
          display: "flex",
          flexDirection: "row",
          gap: "10em",
          justifyContent: "center",
        }}
      >
        <Link href="/protection">
          <a
            style={{
              color: "black",
            }}
          >
            Protection de la vie privée
          </a>
        </Link>
        <Link href="/mentionslegales">
          <a
            style={{
              color: "black",
            }}
          >
            Mentions légales
          </a>
        </Link>
        <Link href="https://www.facebook.com">
          <a
            style={{
              color: "black",
            }}
          >
            Réalisé par yacine
          </a>
        </Link>
      </div>
    </>
  );
};
