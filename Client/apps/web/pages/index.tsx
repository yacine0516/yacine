import { useState, useEffect } from "react";
import { Navbar, Body, Btn_Top } from "ui";
import Head from "next/head";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Web() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
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
    <section>
      <Head>
        <title>Accuille</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div style={{ paddingBottom: "5%" }}>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
      <Btn_Top onClick={scrollToTop} style={visible} />
    </section>
  );
}
