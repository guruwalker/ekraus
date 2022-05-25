import * as React from "react"

//import page layout
import PageLayout from "../../layouts/PageLayout"
//import css file
import "../../assets/css/global.css"
const TeamPage = () => {
  return (
    <PageLayout>
      <section className="hero is-small is-dark">
        <div className="hero-body">
          <div className="container pt-6">
            <div className="container pt-6 mt-6">
              <p className="title is-1 has-text-weight-bold  has-text-centered">
                We gather people instead of money
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
      <section className="hero is-light is-large">
        <div className="-body">
          <div className="container pt-6 mt-5">
            <p className="has-text-weight-bold has-text-centered is-size-3">
              Our Team
            </p>
            <p class="text-muted has-text-centered">Meet and Greet our Team Members</p>

            <div className="container">
              <section class="team text-center py-5">
                <div class="container">
                  <div class="header my-5"></div>
                  <div class="row">
                    <div class="col-md-6 col-lg-3">
                      <div class="img-block mb-5">
                        <img
                          src="https://bulma.io/images/placeholders/256x256.png"
                          class="img-fluid  img-thumbnail rounded-circle"
                          alt=" something1"
                        />
                        <div class="content mt-2">
                          <h4>Zain Knob</h4>
                          <p class="text-muted">Mechanical Engineer</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 ">
                      <div class="img-block mb-5">
                        <img
                          src="https://bulma.io/images/placeholders/256x256.png"
                          class="img-fluid  img-thumbnail rounded-circle"
                          alt=" something1"
                        />
                        <div class="content mt-2">
                          <h4>Syndia Lee</h4>
                          <p class="text-muted">Software Engineer</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                      <div class="img-block mb-5">
                        <img
                          src="https://bulma.io/images/placeholders/256x256.png"
                          class="img-fluid  img-thumbnail rounded-circle"
                          alt=" something1"
                        />
                        <div class="content mt-2">
                          <h4>Noel Flantier</h4>
                          <p class="text-muted">Joomla Specialist</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                      <div class="img-block mb-5">
                        <img
                          src="https://bulma.io/images/placeholders/256x256.png"
                          class="img-fluid  img-thumbnail rounded-circle"
                          alt=" something1"
                        />
                        <div class="content mt-2">
                          <h4>Bobby Doe</h4>
                          <p class="text-muted">Street Artist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
