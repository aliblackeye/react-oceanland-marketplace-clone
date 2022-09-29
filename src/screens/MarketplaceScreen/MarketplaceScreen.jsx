import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './marketplaceScreen.scss';
import Card from '../../components/Card/Card';

const categoriesOptions = [
    { optionText: "All", inputName: "categories-all" },
    { optionText: "Booster", inputName: "booster" },
    { optionText: "Package", inputName: "package" },
    { optionText: "Ticket", inputName: "ticket" },
    { optionText: "Tool", inputName: "tool" },
]

const nameOptions = [
    { optionText: "All", inputName: "name-all" },
    { optionText: "Coconut Shell", inputName: "coconut-shell" },
    { optionText: "Wooden Cup", inputName: "wooden-cup" },
    { optionText: "Bucket", inputName: "bucket" },
    { optionText: "Barrel", inputName: "barrel" },
    { optionText: "Basket", inputName: "basket" },
    { optionText: "Fishing Net", inputName: "fishing-net" },
]



const FilterOption = ({ optionText, inputName }) => {
    return (
        <div className="filter-option">
            <span className="option-text">{optionText}</span>
            <input type="checkbox" name={inputName} />
        </div>
    )
}


export default function Marketplace() {


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
        <div className="marketplace-screen">
            <h1 className="marketplace-title"><span className="color-primary">NFT</span> Market</h1>
            <p className="nft-counter">227 NFT</p>
            <div className="marketplace-wrapper">
                <div className="filters">
                    <h4 className="filters-title">Filters</h4>
                    <Accordion disableGutters={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Categories</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='accordion-items'>
                            {categoriesOptions.map((option, i) => (
                                <FilterOption key={i} optionText={option.optionText} inputName={option.inputName} />
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disableGutters={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Name</Typography>
                        </AccordionSummary >
                        <AccordionDetails className='accordion-items'>
                            {nameOptions.map((option, i) => (
                                <FilterOption key={i} optionText={option.optionText} inputName={option.inputName} />
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="marketplace">
                    <select name="marketplace-sorting" className="marketplace-sorting">
                        <option value="a-z">Listings (A-Z)</option>
                        <option value="z-a">Listings (Z-A)</option>
                        <option value="highest">Price (Highest)</option>
                        <option value="lowest">Price (Lowest)</option>
                    </select>
                    <div className="marketplace-items">
                        {newListings.map(c => (
                            <Card image={c.image} title={c.title} tag={c.tag} creator={c.creator} creatorImg={c.creatorImg} price={c.price} button={c.button} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
