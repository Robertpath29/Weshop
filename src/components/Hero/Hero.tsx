import React from "react";
import { HeroStyle } from "./hero.style";
import Header from "../Header/Header";
import CarouselHero from "../CarouselHero/CarouselHero";

const Hero = () => {
    return (
        <HeroStyle>
            <Header />
            <CarouselHero />
        </HeroStyle>
    );
};

export default Hero;
