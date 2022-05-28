import * as React from "react"
//import Layout
import PageLayout from "../layouts/PageLayout"

//import tab plugins
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

//import faq-accordions
import ConsumersPageFaq from "../components/faq-accordions/ConsumersFaq"
import NgosFaq from "../components/faq-accordions/NgosFaq"
import OrganizationsFaq from "../components/faq-accordions/OrganizationsFaq"
import ProducersFaq from "../components/faq-accordions/ProducersFaq"

//import mui icons
import PhoneIcon from "@mui/icons-material/Phone"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonPinIcon from "@mui/icons-material/PersonPin"

// import testImage from '../assets/icons/main/producer.svg'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const FaqsPage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <PageLayout>
      <section className="hero is-small is-dark">
        <div className="hero-body">
          <div className="container pt-6">
            <div className="container pt-6 mt-6">
              <p className="title is-1 has-text-weight-bold  has-text-centered">
                Hello, how can we help?
              </p>
              <p className="is-size-5 has-text-centered has-text-weight-lighter">
                Click on one of the categories below to find the answer to your
                question! <br />
                Your question is not listed? Then contact our expert support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-large pb-6">
        <div className="-body">
          <div className=" pt-6 mt-6">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // variant="fullWidth"
                  centered
                  aria-label="full width tabs example"
                >
                  <Tab
                    iconPosition="bottom"
                    icon={<PersonPinIcon />}
                    label="For Local Consumers"
                    {...a11yProps(0)}
                  />
                  <Tab
                    iconPosition="bottom"
                    icon={<PersonPinIcon />}
                    label="For NGOs"
                    {...a11yProps(1)}
                  />
                  <Tab
                    iconPosition="bottom"
                    icon={<PersonPinIcon />}
                    label="For Organizations"
                    {...a11yProps(2)}
                  />
                  <Tab
                    iconPosition="bottom"
                    icon={<PersonPinIcon />}
                    label="For Producers"
                    {...a11yProps(3)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <ConsumersPageFaq />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <NgosFaq />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <OrganizationsFaq />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ProducersFaq />
              </TabPanel>
            </Box>
          </div>
        </div>
      </section>
      <section className="hero is-small is-subFooter">
        <div className="hero-body">
          <div className="py-6 pt-4">
            <p className="has-text-dark has-text-centered has-text-weight-semibold is-size-4">
              Do you have any questions not covered here?
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
export default FaqsPage
