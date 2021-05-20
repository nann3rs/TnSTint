import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Button } from '../../GlobalStyles';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroSubTitle,
    HeroText,
    HeroBtn,
} from './Main.styles.jsx';

const Hero = () => {
    const { toggleModal, makeModal } = useContext(ModalContext);

    return(
      <HeroContainer>
          <Navbar/>
          <HeroContent>
              <HeroContentText>
                  <HeroTitle>
                      <HeroTitleText>Mobile Tinting</HeroTitleText>
                  </HeroTitle>
                  <HeroSubTitle>Professional, Clean, Quality</HeroSubTitle>
                  <HeroText>
                      Some random text here
                  </HeroText>
                  <HeroBtn onClick={() => {
                    makeModal();
                    toggleModal();}}>

                      <Button primary big bigFont bigRadius>Schedule an Appt</Button>
                  </HeroBtn>
              </HeroContentText>
          </HeroContent>
      </HeroContainer>
    );
};

export default Hero;