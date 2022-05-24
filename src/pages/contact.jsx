import * as React from "react"
// import contact form
import ContactForm from "../components/forms/ContactForm"
//import layout
import PageLayout from "../layouts/PageLayout"
//import story set image
import ContactImage from "../assets/icons/contact.svg"

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="hero is-medium is-dark">
        <div className="hero-body">
          <div className="container pt-6">
            <div className="container pt-6 mt-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quaerat iusto sapiente, quas necessitatibus hic eos provident
                recusandae eius eaque eveniet dolore illum veniam repellendus
                sit maxime! Quisquam, earum tenetur odio laboriosam commodi
                provident eos fuga repellat eligendi beatae nisi qui, sed
                explicabo dolore possimus aut exercitationem minus expedita
                perferendis quos hic tempore. Tenetur quos illo eos accusamus
                minima corrupti ut dolorum a totam neque similique nulla
                aspernatur consectetur animi saepe sint, enim cumque sequi
                quisquam in aut suscipit veniam possimus deleniti! Quibusdam
                facere, numquam rem quae, assumenda architecto voluptatibus
                tenetur ipsum inventore asperiores accusamus incidunt quo earum
                laudantium nesciunt dolores sapiente, impedit voluptatum dolore.
                Adipisci, a officiis ea quod dolor ad. Obcaecati, sint ex
                quibusdam amet consequatur magnam pariatur reiciendis molestiae,
                fugiat delectus quam vitae numquam a, dolorem autem? Ad vitae
                sunt atque eos explicabo quibusdam ullam quaerat et, iste minus
                dolores aut ea distinctio, laboriosam consequuntur enim
                voluptatem non. Aspernatur nostrum porro velit laudantium
                tempora accusamus dicta atque, a fugiat? Eveniet, temporibus non
                molestias excepturi omnis nemo consequuntur voluptas enim autem.
                Fugit in corrupti vitae. Enim, quam placeat, culpa possimus ea
                reprehenderit fugiat reiciendis repellendus distinctio aliquid
                vitae? Sequi ex sit et esse? Eligendi voluptates praesentium mag
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container">
            <div className="columns pt-6 mt-5">
              <div className="column pt-6 mt-6">
                <ContactForm />
              </div>
              <div className="column">
                <img
                  src={ContactImage}
                  alt="contact form "
                  className="image is-256x256"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-small is-subFooter">
        <div className="hero-body">
          <div className="py-6 pt-4">
            <p className="has-text-dark has-text-centered has-text-weight-semibold is-size-4">
              Here are some of our success stories
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

export default ContactPage
