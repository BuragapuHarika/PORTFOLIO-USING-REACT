import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import {Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/harika.png"
import HeroBgAnimation from "../../HeroBgAnimation"
const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation/>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br/>
              {Bio.name}
            </Title>
            <TextLoop>
              <Span>
                <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
              }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='blank'>Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={HeroImg} alt="Hero"/>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection