import * as React from "react"

// import images/svgs
import Installer from "../assets/icons/co-icons/installer.svg"
import Citizen from "../assets/icons/co-icons/citizen.svg"
import Initiator from "../assets/icons/co-icons/initiator.svg"

//import layout
import PageLayout from "../layouts/PageLayout"

//import components
import HomePageCarousel from "../components/HomePageCarousel"

const IndexPage = () => {
  return (
    <PageLayout>
      <section>
        <HomePageCarousel />
      </section>
      {/* <section className="hero is-light is-small mt-6">
        <div className="hero-body">
          <div className="container">
            <div className="columns pb-6">
              <div className="column ">
                <div className="card-content">
                  <p className="title is-3 has-text-title-color">
                    What is Ekraus
                  </p>
                  <p className="is-size-5">
                    Climate change is already part of everyday life. Therefore,
                    public actors have to become active together with residents
                    and companies and engage in climate protection. At its core,
                    the CoBenefit approach is a win-win strategy that aims at
                    combining individual benefits and climate protection in a
                    single activity.
                  </p>
                </div>
              </div>
              <div className="column ">
                <div className="card-content">
                  <p className="title is-3 has-text-title-color">
                    How it works?
                  </p>
                  <p className="is-size-5">
                    On our platform, local initiators launch initiatives
                    together with qualified execution partners. People from the
                    region can participate in these initiatives and thus invest
                    in sustainable solutions for their homes. In this way, they
                    can protect the climate and at the same time make themselves
                    independent of rising energy costs.
                  </p>
                </div>
              </div>
              <div className="column ">
                <div className="card-content">
                  <p className="title is-3 has-text-title-color">
                    What is an initiative?
                  </p>
                  <p className="is-size-5">
                    An initiative brings together as many people as possible
                    from a region. This creates a strong collective that has
                    more market power than a single person. Together they
                    benefit from easier access to climate tech solutions through
                    better prices and more security in the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <p className="title is-3 has-text-success has-text-centered">
        Our goal at Ekraus
      </p>
      <section className="hero is-medium is-medium pt-6 mt-6">
        <div className="hero-body">
          <div className="container">
            <div className="columns pb-6">
              <div className="column">
                <p className="pb-6">
                  <span className="is-size-5 has-text-weight-semibold">
                    For Producers <br />
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
                <img
                  className="image is-256x256"
                  src={Installer}
                  alt="for installers"
                />
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={Citizen}
                  alt="for citizens"
                />
              </div>
              <div className="column">
                <p className="pb-6">
                  <span className="is-size-5 has-text-weight-semibold">
                    For Organizations <br />
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
                  <span className="is-size-5 has-text-weight-semibold">
                    For NGOs <br />
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
                <img
                  className="image is-256x256"
                  src={Initiator}
                  alt="for initiators"
                />
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={Citizen}
                  alt="for citizens"
                />
              </div>
              <div className="column">
                <p className="pb-6">
                  <span className="is-size-5 has-text-weight-semibold">
                    For Local Consumers <br />
                    <br />
                  </span>
                  We offer local initiators a digital toolbox to successfully
                  realise initiatives with residents.
                </p>
                <button className="button is-rounded is-contained is-success has-text-white">
                  Launch initiative
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
export default IndexPage
