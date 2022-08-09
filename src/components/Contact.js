import "../assets/styles/Contact.css";
const Contact = () => {

  return (
    <div className="main-content-section" id="contact">
      <h3 className="section-h-exp section-h-gen" id="contact-h">
        <span className="section-no">04. </span>Get in Touch
      </h3>
      <div className=" main-content-desc contact-desc">
      I am currently looking for new opportunities in Canada and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </div>
      <a className="btn" href="mailto:e.dorudian@gmail.com" rel="noopener noreferrer" target="_blank">Contact Me</a>
    </div>
  );
};
export default Contact;