import React from "react"

const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co/innocentwahome@gmail.com"
      method="POST"
      className="container"
    >
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  name="Name"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="Email"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Phone number (optional)"
                  name="Phone Number"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <textarea
            placeholder="Message"
            className="textarea"
            name="message"
          ></textarea>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
