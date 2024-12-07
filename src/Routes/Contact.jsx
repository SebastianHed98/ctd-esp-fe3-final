import React from "react";
import Form from "../Components/Form";
import { useGlobalContext } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useGlobalContext();

  return (
    <div className={`contact-page page-${state.theme}`}>
      <div className="contact-container">
        <div className={`contact-content ${state.theme}`}>
          <div className="contact-header">
            <h2>¿Necesitas más información?</h2>
            <p>Escribenos tu pregunta, pronto estaremos en contacto contigo.</p>
          </div>
          <div className="contact-form-wrapper">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
