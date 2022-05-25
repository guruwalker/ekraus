import React from "react"

const ContactForm = () => {
  return (
    <form
      // action="https://formspree.io/f/xwkyrzlk"
      // action="https://formsubmit.co/info@kisokolab.com"
      method="POST"
    >
      {/* <input type="hidden" name="_next" value="/thank-you" /> */}

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
            <div className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Company"
                name="Company"
              />
            </div>
          </div>

          <div className="field">
            <div className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Phone number"
                name="Phone Number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="country">
                  <option value="Local Consumer">Local Consumer</option>
                  <option value="Organization">Organization</option>
                  <option value="NGO">NGO</option>
                  <option value="Producer">Producer</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-primary">
                Select Role
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <textarea
            placeholder="How can we help?"
            className="textarea"
            name="Message"
          />
        </div>
      </div>

      <div className="field">
        <button className="button is-black is-rounded" type="submit">
          Connect with us
        </button>
      </div>
    </form>
  )
}

export default ContactForm
