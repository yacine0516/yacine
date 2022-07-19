import Head from "next/head";
import { useState, useEffect } from "react";

import { Contact, Cont_form, Navbar, Footer, Mapp, Btn_Top } from "ui";
const Contac = () => {
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
    <>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="contact_page">
        <header>
          <Navbar />
        </header>
        <Contact />
        <div className="contact_body_grid">
          <div className="contact_body_el">
            <Cont_form />
          </div>
          <div className="contact_body_el">
            <Mapp />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <Btn_Top onClick={scrollToTop} style={visible} />
    </>
  );
};

export default Contac;
