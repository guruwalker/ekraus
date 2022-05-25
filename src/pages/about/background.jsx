import * as React from "react"

//import page layout
import PageLayout from "../../layouts/PageLayout"
const BackgroundPage = () => {
  return (
    <PageLayout>
      <section className="hero is-small is-dark">
        <div className="hero-body">
          <div className="container pt-6">
            <div className="container pt-6 mt-6">
              <p className="title is-1 has-text-weight-bold  has-text-centered">
                We want to fix world hunger
              </p>
              <p className="is-size-5 has-text-centered has-text-weight-lighter">
                We facilitate cooperation between our local initiators,
                residents and businesses.
                <br /> Our goal is to build an ecosystem that supports the
                acceptance of climate protection measures.
              </p>
            </div>
          </div>
        </div>
      </section>
      <p>Background information</p>
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
