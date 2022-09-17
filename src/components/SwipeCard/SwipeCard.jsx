import { IoWalletOutline } from 'react-icons/io5';


import './swipecard.scss';

export default function SwipeCard({ image, title, tag, creator, creatorImg, price, button }) {
    return (
        <div className="swipe-card">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <div className="card-top">
                <h6 className="card-title">{title}</h6>
                <div className="card-tag">{tag}</div>
            </div>
            <div className="card-center">
                <div className="author">
                    <div className="author-image">
                        <img src={creatorImg} alt="" />
                    </div>
                    <div className="author-info">
                        <span className="author-text">Creator</span>
                        <span className="author-name">{creator}</span>
                    </div>
                </div>
                <div className="price">
                    <span className="price-text">Price</span>
                    <div className="price-amount">{price} OLAND</div>
                </div>
            </div>
            {
                button &&
                <div className="card-bottom">
                    <button className="btn btn-primary btn-with-icon"><IoWalletOutline size={16} color='#fff' /> BUY</button>
                </div>
            }
        </div>
    )
}
