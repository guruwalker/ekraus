import * as React from "react"

//import page layout
import PageLayout from "../../layouts/PageLayout"
//import css file
import "../../assets/css/global.css"
const TeamPage = () => {
  return (
    <PageLayout>
      <section className="hero is-dark is-medium">
        <div className="hero-body">
          <div className="container pt-6 mt-5">
            <p>
              <span className="is-size-3 has-text-centered	">
                What do we want to achieve
              </span>{" "}
              <br />
              Our vision for communities and cities with self-sustaining local
              food production and residents who produce with ready market.
              Through our platform and partners, we want people to realize ideas
              and concepts for a sustainable future
            </p>
          </div>
        </div>
      </section>
      <section className="hero is-light is-fullheight">
        <div className="-body">
          <div className="container pt-6 mt-5">
            <p className="has-text-weight-bold has-text-centered is-size-3">
              Our Team
            </p>
            <div className="container">
              <div className="columns">
                {/* <div className="column">
                  <img
                    src="https://bulma.io/images/placeholders/256x256.png"
                    alt="Placeholder image"
                    className="image is-256x256 is-rounded"
                  />
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div> */}
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder "
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder "
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
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
              Would you like to join our team?
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
export default TeamPage
