import * as React from "react"

// import images/svgs
import Producers from "../assets/icons/main/producer.svg"
import ngos from "../assets/icons/main/ngo.svg"
import Organizations from "../assets/icons/main/organization.svg"
import Consumers from "../assets/icons/main/producer.svg"

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
      <div>
        <p className="title is-3 pt-6 has-text-success has-text-centered">
          Together towards sustainable food production and stable market
        </p>
      </div>
      <section className="hero is-medium is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="pb-6">
                  <span className="is-size-5 has-text-weight-semibold">
                    For Producers <br />
                    <br />
                  </span>
                  Through CoBenefit, people can easily benefit from climate tech
                  solutions for their homes. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Similique vel rem minima dolore
                  nemo esse perspiciatis? Porro esse dolorum adipisci omnis
                  quaerat odit enim labore asperiores alias unde? Neque
                  repellendus, commodi voluptatem odit maiores sunt in eveniet
                  quia odio ad porro illo. Necessitatibus dignissimos id ex quis
                  odio quaerat est!
                </p>
                <button className="button is-rounded is-contained is-primary">
                  Find initiative
                </button>
              </div>
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={Producers}
                  alt="for installers"
                />
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={Organizations}
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
                  realise initiatives with residents. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Magnam, corrupti magni
                  maxime ullam exercitationem aspernatur eius ad aliquid quasi
                  incidunt pariatur nesciunt quia labore minus earum minima enim
                  officiis voluptates voluptatum ex recusandae? Accusantium
                  obcaecati autem possimus enim! Consequatur ut nemo iusto,
                  mollitia ex sunt harum sit unde odio neque?
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
                  term through partnerships with local initiators. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Eveniet quas
                  eaque, vero maxime id adipisci nostrum nesciunt neque
                  accusantium? Nam amet rerum voluptatum ab. Laudantium
                  reprehenderit vel dicta sequi id suscipit eum quidem magnam
                  soluta nihil voluptates cumque, facere architecto aliquam quia
                  quasi recusandae harum et consequuntur eligendi similique
                  mollitia?
                </p>
                <button className="button is-rounded is-contained is-danger">
                  Offer services
                </button>
              </div>
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={ngos}
                  alt="for initiators"
                />
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={Consumers}
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
                  realise initiatives with residents. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Dolorum eos distinctio
                  vitae labore animi, cumque tenetur. Inventore, ab? Sequi minus
                  odit libero id veniam, quia quibusdam est dicta maxime sunt
                  aliquam inventore repellat! Atque tempore dolorem quisquam
                  cumque officia perferendis qui quas mollitia, dignissimos,
                  eligendi eveniet quia voluptas, iste fugit.
                </p>
                <button className="button is-rounded is-contained is-success has-text-white">
                  Launch initiative
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-subFooter">
        <div className="hero-body">
          <div className="py-6 pt-4">
            <p className="has-text-dark has-text-centered has-text-weight-semibold is-size-4">
              We want to be part of the solution
            </p>
            <div className="container">
              <div className="level">
                <div className="level-item">
                  <button className=" button is-outlined has-background-dark has-text-white has-text-centered is-size-5 is-rounded">
                    Join Us
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
export default IndexPage
