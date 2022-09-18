
import { useState } from 'react';
import SwipeCard from '../SwipeCard/SwipeCard';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// Import Swiper React components, required modules and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import './recentlysold.scss';

export default function RecentlySold() {

    const [newListings, setNewListings] = useState([
        { id: 1, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft13.png", title: "Hammer", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "1500" },
        { id: 2, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft1.png", title: "Coconut Shell", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "1000" },
        { id: 3, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft9.png", title: "Cutter Stone", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "1500" },
        { id: 4, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft5.png", title: "Basket", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "1500" },
        { id: 5, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft20.png", title: "Fishing Net Ticket", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "1500" },
        { id: 6, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft17.png", title: "Wooden Cup Ticket", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "1500" },
        { id: 7, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft24.png", title: "Axe Ticket", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "2990" },
        { id: 8, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft26.png", title: "Shovel Ticket", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "1900" },
        { id: 9, image: "https://defi.oceanland.io/assets/package/silver.png", title: "Silver Starter Tool Pack", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "6500" },
        { id: 10, image: "https://defi.oceanland.io/assets/package/gold.png", title: "Gold Starter Tool Pack", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "10000" },
        { id: 11, image: "https://defi.oceanland.io/assets/package/diamond.png", title: "Diamond Starter Tool Pack", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "30000" },
        { id: 12, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft29.png", title: "Auto Miner Booster", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "52" },
        { id: 13, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft31.png", title: "Ticket Ratio Booster", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "85" },
        { id: 14, image: "https://defi.oceanland.io/assets/oceanland/nfts/nft30.png", title: "Production Booster", tag: "BSC", creator: "Oceanland", creatorImg: "https://defi.oceanland.io/assets/oceanland/oland.png", price: "220" },
    ]);

    return (
        <section className="recently-sold">
            <div className="recently-sold-container container">


                <div className="swiper-container">
                    <div className="top">
                        <div className="left">
                            <h1 className="title"><span className="color-primary">Recently</span> Sold</h1>
                        </div>
                        <div className="right">
                            <div className="slider-buttons">
                                <button className="btn slider-btn recently-sold-button-prev"><AiOutlineArrowLeft size={26} /></button>
                                <button className="btn slider-btn recently-sold-button-next"><AiOutlineArrowRight size={26} /></button>
                            </div>
                            <button className="btn btn-outline">Explore More</button>
                        </div>

                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true, }}
                        navigation={{ nextEl: '.recently-sold-button-next', prevEl: '.recently-sold-button-prev' }}
                        className="bottom"
                        breakpoints={
                            {
                                1300: { slidesPerView: 5, spaceBetween: 18 },
                                1120: { slidesPerView: 4, spaceBetween: 12 },
                                890: { slidesPerView: 3, spaceBetween: 12 },
                                664: { slidesPerView: 2, spaceBetween: 12 },
                                350: { slidesPerView: 1, spaceBetween: 12 }
                            }
                        }
                    >
                        {newListings.map(c => (
                            <SwiperSlide key={c.id}  >
                                <SwipeCard image={c.image} title={c.title} tag={c.tag} creator={c.creator} creatorImg={c.creatorImg} price={c.price} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="background-image">
                        <img src="./images/recentlysold/background.png" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}
