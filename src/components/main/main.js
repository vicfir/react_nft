import React from 'react';
import './public/style/main.css';

// import eth from './public/img/icon-ethereum.svg';
import clock from './public/img/icon-clock.svg';
import avatar from './public/img/image-avatar.png';
import view from './public/img/icon-view.svg'

const Card = ({_img, _imgPrice, _price , _cardColor}) => {
    return (
        <div class="card">
            <div class="imgNft">
                <img src={_img} class="nftImg" alt="" />
                <div class="imgActive">
                    <img src={view} alt="" />
                </div>
            </div>
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes balance and calm</p>
            <div class="priceTimeLeft">
                <div class="price">
                    <img src={_imgPrice} alt="" />
                    <p>{_price}</p>
                </div>
                <div class="timeLeft">
                    <img src={clock} alt="" />
                    <p>3 days left</p>
                </div>
            </div>
            <hr />
            <div class="avatar">
                <img src={avatar} alt="" />
                <p>Creation of<span> Jules Wyvern</span></p>
            </div>
        </div>
    )
};

export default Card;