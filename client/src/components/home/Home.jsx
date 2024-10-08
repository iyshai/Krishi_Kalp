// import React from 'react'
// import Hero from '../hero/Hero'
import React, { useState } from 'react';
import classes from './home.module.css'
import illustration1 from '../../assets/male-delivery-guy-riding-scooter.svg'
import illustration2 from '../../assets/delivery-location.svg'
import illustration3 from '../../assets/deliveryman-with-pizza.svg'
import Navbar from '../navbar/Navbar'
import SearchBar from '../searchBar/SearchBar'
import  SearchResultsList from '../searchBar/SearchResultsList'

// import Foods from '../foods/Foods'
// import Newsletter from '../newsletter/Newsletter'

const Home = () => {
  const [results, setResults] = useState([]);
  return (
  
    <div className={classes.container}>
      <Navbar/>
      <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
       
      </div>
      </div>




      {/* <div className={classes.wrapper}> */}
        {/* <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}>Always on time for you</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={illustration1} alt="" className={classes.firstImg}/>
              <h3>Our delivery guy is always on time</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration2} alt="" className={classes.secondImg}/>
              <h3>He works very hard</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration3} alt="" className={classes.thirdImg}/>
              <h3>He is friendly and social</h3>
            </div>
          </div>
        </div> */}
        {/* <Foods /> */}
        {/* <Newsletter /> */}
      {/* </div> */}
    </div>
  )
}

export default Home