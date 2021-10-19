import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from "./Button";

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle="btn--outine" buttonSize="btn--large">
                    Get Started
                </Button>
                <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--large">
                    Watch Trailer <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}
