import styled from 'styled-components';

export const PageLanding = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const PageLandingContent = styled.div`

  @media (min-width: 1100px){
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 
    "logo hero hero"
    "buttons buttons total";
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img{
    height: 10rem;
  }

  h2{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px){
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h2{
      text-align: initial;
      font-size: 3.6rem;
    }

    img{
      height:100%;

    }
  }
`;

export const HeroImage = styled.img`
  width:100%;

  @media (min-width: 1100px){
    align-self: end;
    grid-area: hero;
  }

`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a{
    width: 30rem;
    height: 10rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;

    img{
      margin-right: 2.4rem;
      width: 4rem;
    }
  }
  a:first-child {
    margin-right: 1.6rem;
  }

  a.study{
    background: var(--color-primary-lighter);
      &:hover{
        background: var(--color-primary-light);
      }
  }

  a.give-classes{
    background: var(--color-secundary);
      &:hover{
        background: var(--color-secundary-dark);
      }
    }

  @media (min-width: 1100px){
    grid-area: buttons;
    justify-content: flex-start;

    a{
      font-size: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex; 
  align-items: center;
  justify-content: center;


  img{
    margin-left: 0.8rem;
  }
  
  @media (min-width: 1100px){
    grid-area: total;
  }
`;

