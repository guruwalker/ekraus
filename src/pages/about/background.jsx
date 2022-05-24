import * as React from "react"

//import page layout
import PageLayout from "../../layouts/PageLayout"
const BackgroundPage = () => {
  return (
    <PageLayout>
      <section className="hero is-medium is-light">
        <div className="hero-body">
          <div className="container pt-6 mt-5">
            <p>
              <span className="is-size-3 has-text-centered	">What do we want to achieve</span> <br />
              Our vision for communities and cities with self-sustaining local
              food production and residents who produce with ready market.
              Through our platform and partners, we want people to realize ideas
              and concepts for a sustainable future
            </p>
          </div>
        </div>
      </section>
      <section className="hero is-small is-subFooter">
        <div className="hero-body">
          <div className="py-6 pt-4">
            <p className="has-text-dark has-text-centered has-text-weight-semibold is-size-4">
              Become a part of our journey. Would you like to know more?
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
export default BackgroundPage
