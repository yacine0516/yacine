/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Head from "next/head";
import React from "react";
import { Btn_About, Btn_Top, Footer, Navbar } from "ui";
const About = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setVisible(true);
    } else if (scrolled <= 50) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      <Head>
        <title>About</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="about">
        <div style={{ paddingBottom: "10%" }}>
          <Navbar />
        </div>
        <h2 className="about_us_title"> Qui Somme Nous ?</h2>
        <div className="about_us">
          <p className="about_us_paragraph">
            Nous sommes une équipe composée de techniciens spécialisés dans le
            domaine du chaud ,ayant un capital d'experience de plus de 25 ans
            dans ce secteur d'activité.
          </p>
          <p className="about_us_paragraph">
            Nous avons à notre effectifs d'intervention ,plusieurs entreprises
            publiques et privés de renomés nationales ,tels que les universités
            d'Alger .{" "}
          </p>
          <Btn_About
            nom={"Vous désirez communiquer avec l'un de nos services"}
          />
        </div>
        <div>
          <Footer />
        </div>
        <Btn_Top onClick={scrollToTop} style={visible} />
      </div>
    </>
  );
};
export default About;
