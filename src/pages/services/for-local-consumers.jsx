import * as React from "react"
import PageLayout from "../../layouts/PageLayout"
import Man from "../../assets/images/craftsman_laptop-frame.jpg"
import Woman from "../../assets/images/women_at_fence_small-frame.jpg"
const LocalConsumersPage = () => {
  return (
    <PageLayout>
      <section className="hero is-medium is-dark">
        <div className="hero-body">
          <div className="">
            <div className="pt-6 mt-6">
              <p className="has-text-centered">
                <span className="title is-1 has-text-danger pb-3">
                  Grow through partnerships with local initiators <br />
                  <br />
                </span>
                Our initiators are looking for long-term partners to make
                climate tech solutions accessible to residents.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-small">
        <div className="hero-body">
          <div className="">
            <div className="pt-6 mt-6">
              <p className="has-text-centered">
                <span className="has-text-success has-text-weight-semibold title is-2">
                  Why Ekraus <br />
                  <br />
                </span>
                Installation companies are currently much sought-after and have
                full order books. However, sales take up a lot of time because
                the basics of solutions have to be explained again and again. A
                lot of time is lost in driving to and advising individual
                customers. At CoBenefit, we bundle and inform prospective
                customers in advance so that you can concentrate on your core
                business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-light">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="has-text- has-text-weight-bold title is-2">
                  What does Ekraus offer installation companies?
                </p>

                <div>
                  <p className="pt-4">
                    <span className="has-text-success has-text-weight-semibold">
                      Easy <br />
                    </span>
                    Together with our initiators, we take care of the marketing
                    for you and make the customer data accessible to you via our
                    platform.
                  </p>
                </div>
                <div>
                  <p className="pt-4">
                    <span className="has-text-success has-text-weight-semibold">
                      For free <br />
                    </span>
                    Together with our initiators, we take care of the marketing
                    for you and make the customer data accessible to you via our
                    platform.
                  </p>
                </div>
                <div>
                  <p className="pt-4">
                    <span className="has-text-success has-text-weight-semibold">
                      Sustainable <br />
                    </span>
                    Together with our initiators, we take care of the marketing
                    for you and make the customer data accessible to you via our
                    platform.
                  </p>
                </div>
              </div>
              <div className="column">
                <img
                  src={Man}
                  alt="why-ekraus-installers"
                  className="image is-256x256 is-"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <img
                  src={Woman}
                  alt="why-ekraus-installers"
                  className="image is-256x256 is-"
                />
              </div>
              <div className="column">
                <p className="has-text- has-text-weight-bold title is-2">
                  Qualified interested persons bundled from one region
                </p>

                <div>
                  <p className="pt-4">
                    <span className="has-text-success has-text-weight-semibold">
                      Education <br />
                    </span>
                    The participants of an initiative are informed in advance
                    about the respective product category and given answers to
                    any questions that may arise.
                  </p>
                </div>
                <div>
                  <p className="pt-4">
                    <span className="has-text-success has-text-weight-semibold">
                      Efficiency <br />
                    </span>
                    Bundling simplifies project management. Your installation
                    teams can install several systems at once within one region.
                  </p>
                </div>
                <div>
                  <p className="pt-4">
                    <span className="has-text-success has-text-weight-semibold">
                      Communication <br />
                    </span>
                    Via our platform or our partners, you can view the details
                    of the participants and upload individual offers and
                    invoices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" is-light is-large">
        <div className="hero-body">
          <div className="container">
            <p className="title is-2 has-text-centered has-text-weight-semibold">
              An initiative in 3 steps
            </p>
            <div className="columns is-desktop">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="subtitle has-text-success has-text-centered has-text-weight-semibold pb-2">
                      Respond to request
                    </p>
                    <p className="has-text-centered">
                      You find out about our initiator's plans through a request
                      or a direct enquiry. On CoBenefit you receive further
                      details on the request and express your interest to the
                      initiator via our platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="subtitle has-text-success has-text-centered has-text-weight-semibold pb-2">
                      Receive acceptance
                    </p>
                    <p className="has-text-centered">
                      If you meet the necessary price and performance criteria,
                      you receive the acceptance for an initiative. You will
                      then be given the credentials to register on our platform
                      or with our partner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="subtitle has-text-success has-text-centered has-text-weight-semibold pb-2">
                      Provide service
                    </p>
                    <p className="has-text-centered">
                      The initiative is launched on CoBenefit and residents can
                      register. Via our platform or our partners, you can access
                      the customers' data and contact them. You provide the
                      offered service to the customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-subFooter">
        <div className="hero-body">
          <div className="py-6 pt-4">
            <p className="has-text-dark has-text-centered has-text-weight-semibold is-size-4">
              Would you like to sell your products locally?
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

export default LocalConsumersPage
