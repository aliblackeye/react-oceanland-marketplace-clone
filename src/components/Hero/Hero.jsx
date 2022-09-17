import './hero.scss';



export default function Hero() {

    return (
        <section className="hero" >

            <div className="hero-container container">
                <h1 className="heading">Oceanland</h1>
                <h2 className="sub-heading">DeFi & NFT Marketplace</h2>
                <span className="description">Trade Oceanland Recources and NFTs, Swap, and Farm</span>
            </div>
            <div className="animate__animated animate__fadeInUpBig">

            </div>

            <a href="#newlistings" id="scroll-down">
                <div className="arrow-down">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </a>
        </section>
    )
}
