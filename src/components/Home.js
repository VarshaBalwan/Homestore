import React from 'react'
import Main from './Main'
import '../App.css'
import TrendingItems from './TrendingItems'
import TopPics from './TopPics'
import Footer from './Footer'
import Collections from './Collections'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Company from './Company'
import Services from './Services'
import Values from './Values'

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Company />
      <TrendingItems />
      <Services />
      <TopPics />
      <Values />
      <Collections />
      <div className='motto'>
      <img className='motto-img' src={require("../images/motto.jpg")} alt="motto"/>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home