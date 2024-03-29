import * as React from "react"
import PageLayout from "../../layouts/PageLayout"

//import icons
import OneHand from "../../assets/icons/co-icons/one-hand.svg"
import Community from "../../assets/icons/co-icons/community.svg"

const OrganizationsPage = () => {
  return (
    <PageLayout>
      <section className="hero is-small is-dark">
        <div className="hero-body">
          <div className="container pt-6">
            <div className="container pt-6 mt-6">
              <p className="title is-1 has-text-weight-bold has-text-warning has-text-centered">
                Get rid of unnecessary expenses by buying locally
              </p>
              <p className="is-size-5 has-text-centered has-text-weight-lighter">
                In contrary to ordinary crowdfunding, we exclusively provide a
                platform for sustainable initiatives <br /> and local initiators
                to make climate tech solutions accessible to residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-large is-light">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-one-third">
              <img
                src={Community}
                alt="community"
                className="image is-256x256"
              />{" "}
            </div>
            <div className="column">
              <p>
                <strong>The community principle</strong>
                <br />
                An initiative brings together as many people as possible from a
                region. This creates a strong collective that has more market
                power than a single person. Together you benefit from easier
                access to climate tech solutions through better prices and more
                security in the community.
              </p>
            </div>
          </div>
          <div className="columns pt-6 mt-6">
            <div className="column">
              <p>
                <strong>Your benefits</strong>
                <br />
                On CoBenefit you can get independent information and join
                initiatives in your region to benefit from the advantages of our
                group offers. When you register, you receive a non-binding offer
                for the respective solution as well as for financing, insurance
                or a green electricity tariff if you wish.
              </p>
            </div>
            <div className="column is-one-third">
              <img src={OneHand} alt="community" className="image is-256x256" />{" "}
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
              Would you like to buy locally grown products?
            </p>
            <div className="container">
              <div className="level">
                <div className="level-item">
                  <button className=" button is-outlined has-background-dark has-text-white has-text-centered is-size-5 is-rounded">
                    Go to MarketPlace
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

export default OrganizationsPage
