
import Card from '../Card/Card';


import './swipecard.scss';

export default function SwipeCard({ image, title, tag, creator, creatorImg, price, button }) {
    return (
        <div className="swipe-card">
            <Card image={image} title={title} tag={tag} creator={creator} creatorImg={creatorImg} price={price} button={button} />
        </div>
    )
}
