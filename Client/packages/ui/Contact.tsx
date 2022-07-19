import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { animated, useSpring } from "@react-spring/web";

export const Contact = () => {
  const props = useSpring({
    to: { x: 0, y: 0 },
    from: { y: -1000 },
    delay: 250,
    color: "red",
  });
  return (
    <div className="contact_us">
      <animated.h1 style={props}>Contact Us</animated.h1>
    </div>
  );
};
type child = {
  children: string;
};
/*Form Components*/
const Label = (Children: child): JSX.Element => {
  return <label className="Label_cont">{Children.children}</label>;
};

/**/
type Inputs = {
  nom: string;
  email: string;
  phone: string;
  message: string;
};

export const Cont_form = () => {
  /**/ const myform = useRef<HTMLFormElement | string>("null");
  const sendEmail = (e: any) => {
    e.preventDefault;
    emailjs.sendForm(
      "service_nfn6vv9",
      "template_0ghrsaa",
      myform.current,
      "3DA2C_8r-ZRYLcQA-"
    );
  };

  const initialValues: Inputs = { nom: "", email: "", phone: "", message: "" };
  const addContact = async (values: Inputs) => {
    const contact = await axios.post("http://localhost:5000/contact", values);
    try {
      if (contact) {
        console.log(contact.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error...</div>;
  }*/
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, e) => {
          addContact(values);
          sendEmail(e);
        }}
      >
        <Form>
          <div className="form_grid">
            <div className="form_grid_first">
              <Label>Nom Complete</Label>
              <Field
                style={{ width: "100%" }}
                id="nom"
                name="nom"
                className="input_form_nom"
                type="text"
                placeholder="Nom Complete"
              />
            </div>
            <div className="form_grid_sec">
              <div className="form_grid_sec_1">
                <Label>Email</Label>
                <Field
                  id="email"
                  name="email"
                  className="input_form_nom"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form_grid_sec_2">
                <Label>Numéro du Télephone</Label>
                <Field id="phone" placeholder="Numero Télephone" name="phone" />
              </div>
            </div>
            <div className="form_grid_sec_3">
              <Label>Message</Label>
              <Field
                style={{ width: "100%", height: "12em" }}
                id="message"
                as="textarea"
                name="message"
                className="input_form_nom"
                placeholder="Message"
              />
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <button
                style={{
                  marginTop: "2.5em",
                  fontSize: "1em",
                  fontWeight: "bold",
                  padding: "1em",
                  width: "100%",
                  background: "darkgray",
                }}
                type="submit"
                placeholder="Submit"
              >
                Envoyer message
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
