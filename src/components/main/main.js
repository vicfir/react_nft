import React from 'react';
import './public/style/main.css';

import nftImg from './public/img/image-equilibrium.jpg';
import eth from './public/img/icon-ethereum.svg';
import clock from './public/img/icon-clock.svg';
import avatar from './public/img/image-avatar.png';
import view from './public/img/icon-view.svg'

const Main = () => {
    return (
        <main>
            <div class="card">
                <div class="imgNft">
                    <img src={nftImg} class="nftImg" alt="" />
                    <div class="imgActive">
                        <img src={view} alt="" />
                    </div>
                </div>
                <h2>Equilibrium #3429</h2>
                <p>Our Equilibrium collection promotes balance and calm</p>
                <div class="priceTimeLeft">
                    <div class="price">
                        <img src={eth} alt="" />
                        <p>0.041ETH</p>
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
        </main>
    )
};

export default Main;