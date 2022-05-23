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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quaerat iusto sapiente, quas necessitatibus hic eos provident
                recusandae eius eaque eveniet dolore illum veniam repellendus
                sit maxime! Quisquam, earum tenetur odio laboriosam commodi
                provident eos fuga repellat eligendi beatae nisi qui, sed
                explicabo dolore possimus aut exercitationem minus expedita
                perferendis quos hic tempore. Tenetur quos illo eos accusamus
                minidam ullam quaerat et, iste minus
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
      <section className="hero is-fullheight">
        <div className="-body">
          <div className=" pt-6 mt-6">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="For Local Consumers" {...a11yProps(0)} />
                  <Tab label="For NGOs" {...a11yProps(1)} />
                  <Tab label="For Organizations" {...a11yProps(2)} />
                  <Tab label="For Producers" {...a11yProps(3)} />
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
    </PageLayout>
  )
}
export default FaqsPage
