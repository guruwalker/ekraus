import * as React from "react"
import Installer from "../assets/icons/co-icons/installer.svg"
import Citizen from "../assets/icons/co-icons/citizen.svg"
import Initiator from "../assets/icons/co-icons/initiator.svg"

import PageLayout from "../layouts/PageLayout"

const IndexPage = () => {
  return (
    <PageLayout>
      <section className="hero is-medium is-dark pt-6 mt-6">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1 has-text-centered has-text-success">
              Together towards climate <br /> protection
            </p>
            <p className="subtitle has-text-centered pt-2">
              This is where local initiators, capable execution partners and
              engaged residents come together to turn plans into actions.
            </p>
            <div className="level">
              <div className="level-item">
                <button className="button is-rounded is-contained is-primary has-text-weight-semibold">
                  For residents
                </button>
              </div>
              <div className="level-item">
                <button className="button is-rounded is-contained is-warning has-text-weight-semibold has-text-white">
                  For residents
                </button>
              </div>
              <div className="level-item">
                <button className="button is-rounded is-contained is-danger has-text-weight-semibold">
                  For residents
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium is-light pt-6 mt-6">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1 has-text-centered">
              Find initatives in your area
            </p>
            <div className="columns">
              <div className="column is-three-quarters">
                <input type="text" placeholder="Search.." />
              </div>
              <div className="column ">
                <button className="button is-success is-rounded">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-medium is-medium pt-6 mt-6">
        <div className="hero-body">
          <div className="container">
            <div className="columns pb-6">
              <div className="column is-one-third">
                <p className="title is-3 has-text-success">What is Ekraus</p>
              </div>
              <div className="column">
                <p className="subtitle">
                  Climate change is already part of everyday life. Therefore,
                  public actors have to become active together with residents
                  and companies and engage in climate protection. At its core,
                  the CoBenefit approach is a win-win strategy that aims at
                  combining individual benefits and climate protection in a
                  single activity.
                </p>
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <p className="title is-3 has-text-success">How it works?</p>
              </div>
              <div className="column">
                <p className="subtitle">
                  On our platform, local initiators launch initiatives together
                  with qualified execution partners. People from the region can
                  participate in these initiatives and thus invest in
                  sustainable solutions for their homes. In this way, they can
                  protect the climate and at the same time make themselves
                  independent of rising energy costs.{" "}
                </p>
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <p className="title is-3 has-text-success">
                  What is an initiative?
                </p>
              </div>
              <div className="column">
                <p className="subtitle">
                  An initiative brings together as many people as possible from
                  a region. This creates a strong collective that has more
                  market power than a single person. Together they benefit from
                  easier access to climate tech solutions through better prices
                  and more security in the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="title is-3 has-text-success has-text-centered">
        Our goal at Ekraus
      </p>
      <section className="hero is-medium is-medium pt-6 mt-6">
        <div className="hero-body">
          <div className="container">
            <div className="columns pb-6">
              <div className="column">
                <p className="pb-6">
                  <span className="subtitle has-text-weight-semibold">
                    For residents <br />
                    <br />
                  </span>
                  Through CoBenefit, people can easily benefit from climate tech
                  solutions for their homes.
                </p>
                <button className="button is-rounded is-contained is-primary">
                  Find initiative
                </button>
              </div>
              <div className="column is-one-third">
                <img src={Installer} alt="for installers" />
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <img src={Citizen} alt="for citizens" />
              </div>
              <div className="column">
                <p className="pb-6">
                  <span className="subtitle has-text-weight-semibold">
                    For initiators <br />
                    <br />
                  </span>
                  We offer local initiators a digital toolbox to successfully
                  realise initiatives with residents.
                </p>
                <button className="button is-rounded is-contained is-warning has-text-white">
                  Launch initiative
                </button>
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column">
                <p className="pb-6">
                  <span className="subtitle has-text-weight-semibold">
                    For installers <br />
                    <br />
                  </span>
                  The execution partners of our initiatives grow in the long
                  term through partnerships with local initiators.
                </p>
                <button className="button is-rounded is-contained is-danger">
                  Offer services
                </button>
              </div>
              <div className="column is-one-third">
                <img src={Initiator} alt="for initiators" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
export default IndexPage
