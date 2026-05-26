import { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
    } catch {
      // no-cors requests may throw yet still succeed
    }

    setSubmitted(true);
    e.target.reset();
    setMessageLength(0);
    setIsSubmitting(false);
  };

  return (
    <section id="contact-section" className="contact-section">
      <h2 className="section-title">Have Questions About Planetary Science?</h2>
      <p className="section-subtitle">
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>

      {submitted ? (
        <div className="success-message">
          <p>✓ Thank you! Your message has been successfully submitted. We will get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="full-name">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="full-name"
                name="full_name"
                placeholder="Full name"
                required
                minLength="5"
                maxLength="40"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email<span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Please enter a valid phone number."
                required
                maxLength="15"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message<span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
                maxLength="100"
                rows="4"
                onChange={(e) => setMessageLength(e.target.value.length)}
              ></textarea>
              <span className="char-count">{100 - messageLength} characters</span>
            </div>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit  \u203A'}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
