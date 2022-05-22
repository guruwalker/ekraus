import * as React from "react"

//import page layout
import PageLayout from "../../layouts/PageLayout"
const TeamPage = () => {
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
    </PageLayout>
  )
}
export default TeamPage
