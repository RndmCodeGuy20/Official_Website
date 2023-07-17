import React from 'react'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import About from '../components/About/About'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import Achievement from '../components/Achievements/Achievement'
import Faqs from '../components/FAQs/Faqs'


const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <WhatWeDo />
      {/* <Achievement /> */}
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home