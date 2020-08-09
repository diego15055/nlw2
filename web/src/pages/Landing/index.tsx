import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { PageLanding, PageLandingContent, LogoContainer, HeroImage, ButtonContainer, TotalConnections } from './styles'


function Landing(){

  return (

    <PageLanding>
      <PageLandingContent className="container" id="page-landing-content">
        <LogoContainer>
          <img src={logoImg} alt=""/>
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>

        <HeroImage 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image" 
        />

        <ButtonContainer className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Dar Aulas"/>
            Dar aula
          </Link>
        </ButtonContainer>

        <TotalConnections className="total-connections">
          Total de 200 conexoes realizadas
          <img src={purpleHeartIcon} alt="Coraçao roxo"/>
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
    
  );
}


export default Landing;