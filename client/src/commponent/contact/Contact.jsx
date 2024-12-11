import React, { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page bg-light py-5">
      <div className="container my-5 shadow-lg p-5 bg-white rounded">
        <h1 className="text-center mb-4 colorText fw-bold">Contact Us</h1>
        <p className="text-center mb-4 text-secondary fw-bold fs-5">
          We’re here to help. Fill out the form below.
        </p>
        {formSubmitted ? (
          <div className="text-center text-success">
            <h4>Thank you for reaching out!</h4>
            <p>We’ve received your message and will get back to you soon.</p>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <div className="row">
                    <div className="col-md-6">
                      <label
                        htmlFor="firstName"
                        className="form-label fw-semibold"
                      >
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="lastName"
                        className="form-label fw-semibold"
                      >
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-sm"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control shadow-sm"
                    id="message"
                    rows="5"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btnButton  text-black fw-bold w-25 py-2 shadow"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
