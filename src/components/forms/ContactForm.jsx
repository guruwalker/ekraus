import React from "react"

const ContactForm = () => {
  return (
    <section className="hero is-fullheight is-success">
      <div className="">
        <p>Get in touch</p>

        <div className="hero-body">
          <form action="" className="container">
            <div className="columns">
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <input class="input" type="text" placeholder="Company" />
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded">
                      <input
                        class="input"
                        type="text"
                        placeholder="Phone number"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
