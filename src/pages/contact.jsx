import * as React from "react"
import ContactForm from "../components/forms/ContactForm"
import PageLayout from "../layouts/PageLayout"

const ContactPage = () => {
  return (
    <PageLayout>
      <div className="pt-6 mt-6">
        <ContactForm />
      </div>
    </PageLayout>
  )
}

export default ContactPage
