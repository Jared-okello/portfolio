import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could integrate with an email service or backend
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-info">
        I'm always open to discussing new opportunities, collaborations, 
        or just chatting about technology and development!
        <br /><br />
        Email:{" "}
        <a href="mailto:okellojared050@gmail.com">okellojared050@gmail.com</a>
        <br />
        Location: Kenya
        <br />
        GitHub:{" "}
        <a
          href="https://github.com/Jared-okello"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Jared-okello
        </a>
        <br />
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/jared-okello"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/jared-okello
        </a>
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className="contact-btn" type="submit">
          Send Message
        </button>
      </form>
      {submitted && (
        <p className="contact-success">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      )}
    </section>
  );
}

export default Contact;