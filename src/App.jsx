import { useState } from "react";
import "./App.css";
import Features from "./Components/Features";
import Peoples from "./Components/Peoples";

function App() {
  const features = [
    {
      name: "Fully Responsive",
      description:
        "This theme will look great on any device, no matter the size!",
      icon: <i className="bi-window m-auto text-primary"></i>,
    },
    {
      name: "Bootstrap 5 Ready",
      description:
        "Featuring the latest build of the new Bootstrap 5 framework!",
      icon: <i className="bi-layers m-auto text-primary"></i>,
    },
    {
      name: "Easy to Use",
      description:
        "Ready to use with your own content, or customize the source files!",
      icon: <i className="bi-terminal m-auto text-primary"></i>,
    },
  ];

  const peoples = [
    {
      name: "Margaret E.",
      description: "This is fantastic! Thanks so much guys!",
      image: "/assets/img/testimonials-1.jpg",
    },
    {
      name: "Fred S.",
      description:
        "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
      image: "/assets/img/testimonials-2.jpg",
    },
    {
      name: "Sarah W.",
      description:
        "Thanks so much for making these free resources available to us",
      image: "/assets/img/testimonials-3.jpg",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <a className="btn btn-primary" href="#signup">
            Sign Up
          </a>
        </div>
      </nav>

      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">
                  Generate more leads with a professional landing page!
                </h1>

                <form
                  className="form-subscribe"
                  id="contactForm"
                  data-sb-form-api-token="b55ff6db-9158-4863-8b73-078180a6927d"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-control form-control-lg"
                        id="emailAddress"
                        type="email"
                        placeholder="Email Address"
                        data-sb-validations="required,email"
                      />
                      <div
                        className="invalid-feedback text-white"
                        data-sb-feedback="emailAddress:required"
                      >
                        Email Address is required.
                      </div>
                      <div
                        className="invalid-feedback text-white"
                        data-sb-feedback="emailAddress:email"
                      >
                        Email Address Email is not valid.
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        className="btn btn-primary btn-lg disabled"
                        id="submitButton"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>

                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      <p>To activate this form, sign up at</p>
                      <a
                        className="text-white"
                        href="https://startbootstrap.com/solution/contact-forms"
                      >
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>

                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {features.map((f) => {
              return <Features key={f.name} data={f} />;
            })}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: "url('assets/img/bg-showcase-1.jpg')" }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{ backgroundImage: "url('assets/img/bg-showcase-2.jpg')" }}
            ></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Updated For Bootstrap 5</h2>
              <p className="lead mb-0">
                Newly improved, and full of great utility classes, Bootstrap 5
                is leading the way in mobile responsive web development! All of
                the themes on Start Bootstrap are now using Bootstrap 5!
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: "url('assets/img/bg-showcase-3.jpg')" }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use & Customize</h2>
              <p className="lead mb-0">
                Landing Page is just HTML and CSS with a splash of SCSS for
                users who demand some deeper customization options. Out of the
                box, just add your content and images, and your new landing page
                will be ready to go!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {peoples.map((p) => {
              return <Peoples key={p.name} data={p} />;
            })}
          </div>
        </div>
      </section>

      <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>

              <form
                className="form-subscribe"
                id="contactFormFooter"
                data-sb-form-api-token="b55ff6db-9158-4863-8b73-078180a6927d"
              >
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control form-control-lg"
                      id="emailAddressBelow"
                      type="email"
                      placeholder="Email Address"
                      data-sb-validations="required,email"
                    />
                    <div
                      className="invalid-feedback text-white"
                      data-sb-feedback="emailAddressBelow:required"
                    >
                      Email Address is required.
                    </div>
                    <div
                      className="invalid-feedback text-white"
                      data-sb-feedback="emailAddressBelow:email"
                    >
                      Email Address Email is not valid.
                    </div>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>

                {/* <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a
                      className="text-white"
                      href="https://startbootstrap.com/solution/contact-forms"
                    >
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div> */}

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#!">About</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Contact</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Terms of Use</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                &copy; Your Website 2023. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="bi-facebook fs-3"></i>
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="bi-twitter fs-3"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <i className="bi-instagram fs-3"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
