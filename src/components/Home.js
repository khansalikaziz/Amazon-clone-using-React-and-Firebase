import React from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Home.css'
import Product from './Product';
import ImageSlider from '../ImageSlider';
import { Box } from "@chakra-ui/react";
import { SlideData } from "../SlideData";


const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <Box className='home__image' color="white">
                    <ImageSlider slides={SlideData} />
                </Box>

                {/* <img className='home__image' src='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2FGWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220?alt=media&token=5f8a2338-b788-4781-9daa-bc80091a35b1' alt="" /> */}

                <div className="home__row">
                    <Product
                        id="12321341"
                        title='The lean startup: How Constant Innovation Creates Radically Successfull Businesses Paperback'
                        price={29.99}
                        image='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fproduct.jpg?alt=media&token=b047e82e-dd32-4bd7-b8bf-a1c8c9e751c5'
                        rating={5} />
                    <Product title='Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater,Dough Hook and whisk, 5 Litre Glass Bowl'
                        id="49538094"
                        price={230.0}
                        rating={4}
                        image='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fken.jpg?alt=media&token=105a3a78-819c-48fb-9ff3-637586656ec8'
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter"
                        price={199.99}
                        rating={3}
                        image='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fmoniter.jpg?alt=media&token=94016776-1e8c-4fb3-ac3e-7f111f7e8a90'
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fecho.jpg?alt=media&token=6e7e34e4-3e20-42dd-a2d5-3917de47a402'
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi,128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fpad.jpg?alt=media&token=dd83cb54-0156-46c9-aa27-17164630bcf5'
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="491203867"
                        title="iQOO Neo 6 5G (Dark Nova, 8GB RAM, 128GB Storage) | Snapdragon® 870 5G | 80W FlashCharge"
                        price={29999.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/71WS-0ITj7L._AC_UY327_FMwebp_QL65_.jpg'
                    />
                    <Product
                        id="2309445560"
                        title="realme GT 2 Pro (Paper White 8 GB RAM+128 GB Storage) Qualcomm Snapdragon 8 Gen | 50MP Camera"
                        price={47098.99}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/31b1w-BLkmL.jpg'
                    />
                    <Product
                        id="3298894345"
                        title="vivo iQOO Z6 Pro 5G (Legion Sky, 6GB RAM, 128GB Storage)|Snapdragon 778G 5G|66W FlashCharge|1300 nits Peak Brightness"
                        price={55598.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61E4zA32FrL._AC_UY327_FMwebp_QL65_.jpg'
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter - Super ultra Wide Dual WQHD 5120 X 1440"
                        price={1094.99}
                        rating={4}
                        image='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Ftv.jpg?alt=media&token=35922311-2df8-4a2a-8730-2d4caf8ccea4'
                    />

                </div>
            </div>
        </div>
    )
}

export default Home