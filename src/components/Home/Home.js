import React from 'react'
import './Home.css';
import Product from '../Product/Product';

function Home() {

    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>
            <div className="home__row">
           
            <Product
            id="1"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price="23900.00"
            rating="3"
            image="https://images-na.ssl-images-amazon.com/images/I/71tNLeJY8LL._SX679_.jpg"
            quantity="1"
            >

            </Product>

            <Product
            id="2"
            title="TCL 108 cm (43 inches) 4K Ultra HD Smart Certified Android LED TV 43P8E (Black) (2019 Model)"
            price="25999.00"
            rating="3"
            image="https://images-eu.ssl-images-amazon.com/images/I/513aTWTKy1L._AC_US218_FMwebp_QL70_.jpg"
            quantity="1"
            >

            </Product>
            </div> 



            <div className="home__row">
            <Product
            id="3"
            title="OnePlus 8 (Onyx Black 8GB RAM+128GB Storage)"
            price="44999.00"
            rating="4"
            image="https://m.media-amazon.com/images/I/61UeA7TUrkL._AC_UY218_.jpg"
            quantity="1"
            >

            </Product>

            <Product
            id="4"
            title="Amazon Brand - Solimo Vega Engineered Wood Hydraulic Half Lift-on Queen Bed (Espresso Finish)"
            price="19900.00"
            rating="2"
            image="https://m.media-amazon.com/images/I/81K0dyOOEJL._AC_UL320_.jpg"
            quantity="1"
            >

            </Product>


            <Product
            id="5"
            title="DELL XPS 9300 13.3-inch UHD Laptop (10th Gen Core i7-1065G7/16GB/1TB SSD/Windows 10 Home Plus & MS Office/Intel HD Graphics), White"
            price="123900.00"
            rating="3"
            image="https://m.media-amazon.com/images/I/61rkLuXo73L._AC_UY218_.jpg"
            quantity="1"
            >

            </Product> 
            </div>


            
        </div>
    )
}

export default Home
