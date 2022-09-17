import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import SwipeCard from '../SwipeCard/SwipeCard';

// Import Swiper React components, required modules and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import './newlistings.scss';
import ValueItem from './ValueItem';

export default function NewListings() {

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
        <section className="new-listings" id='newlistings'>
            <section className="value-box">
                <ValueItem title={"Oland"} text={"0.0124"} type={"USDT"} />
                <ValueItem title={"Water"} text={"0.5122"} type={"Oland"} />
                <ValueItem title={"Food"} text={"0.6065"} type={"Oland"} />
                <ValueItem title={"Wood"} text={"0.8162"} type={"Oland"} />
                <ValueItem title={"Metal"} text={"0.8150"} type={"Oland"} />
            </section>
            <div className="new-listings-container container">
                <div className="left">
                    <h1 className="title"><span className="color-primary">New</span> Listings</h1>
                    <div className="slider-buttons">
                        <button className="btn slider-btn newlistings-button-prev"><AiOutlineArrowLeft size={26} /></button>
                        <button className="btn slider-btn newlistings-button-next"><AiOutlineArrowRight size={26} /></button>
                    </div>
                    <button className="btn btn-outline">Explore More</button>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={4}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true, }}
                    navigation={{ nextEl: '.newlistings-button-next', prevEl: '.newlistings-button-prev' }}
                    className="right">
                    {newListings.map(c => (
                        <SwiperSlide key={c.id}  >
                            <SwipeCard image={c.image} title={c.title} tag={c.tag} creator={c.creator} creatorImg={c.creatorImg} price={c.price} button />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section >
    )
}
