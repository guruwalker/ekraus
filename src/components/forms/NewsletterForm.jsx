import React from "react"

const NewsLetterForm = () => {
  return (
    <section className="hero is-fullheight is-success">
      <div className="">
        <p>Get in touch</p>

        <div className="hero-body">
          <form action="" className="container">
            <div className="columns">
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded">
                      <input className="input" type="text" placeholder="Company" />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        className="input"
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

export default NewsLetterForm
