import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-dark p-4">
        <div className="container">
          <div className="row">
            {/* Services Section */}
            <div className="col-md-3">
              <h6 className="text-uppercase font-weight-bold">Services</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Advertisement
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="col-md-3">
              <h6 className="text-uppercase font-weight-bold">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Press kit
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="col-md-3">
              <h6 className="text-uppercase font-weight-bold">Legal</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-md-3">
              <h6 className="text-uppercase font-weight-bold">Newsletter</h6>
              <form>
                <div className="mb-3">
                  <label htmlFor="newsletterEmail" className="form-label">
                    Enter your email address
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id="newsletterEmail"
                      placeholder="username@site.com"
                    />
                    <button className="btn btnButton text-black" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
