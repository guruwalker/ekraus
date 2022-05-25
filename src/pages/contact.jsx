import * as React from "react"
// import contact form
import ContactForm from "../components/forms/ContactForm"
//import layout
import PageLayout from "../layouts/PageLayout"
//import story set image
import ContactImage from "../assets/icons/contact.svg"

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="hero is-small is-dark">
        <div className="hero-body">
          <div className="container pt-6">
            <div className="container pt-6 mt-6">
              <p className="title is-1 has-text-weight-bold  has-text-centered">
                Contact Us
              </p>
              <p className="is-size-5 has-text-centered has-text-weight-lighter">
                Need help? Have a question? Send us a message.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container">
            <div className="columns pt-6 mt-5">
              <div className="column pt-6 mt-6">
                <ContactForm />
              </div>
              <div className="column">
                <img
                  src={ContactImage}
                  alt="contact form "
                  className="image is-256x256"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-subFooter">
        <div className="hero-body">
          <div className="py-6 pt-4">
            <p className="has-text-dark has-text-centered has-text-weight-semibold is-size-4">
              We have agents waiting for you!
            </p>
            <div className="container">
              <div className="level">
                <div className="level-item">
                  <button className=" button is-outlined has-background-dark has-text-white has-text-centered is-size-5 is-rounded">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ContactPage
