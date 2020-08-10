import styled from 'styled-components';

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px){
    max-width: 100%;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
`; 

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  &>img{
    height: 1.6rem;
  }

  a{
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover{
      opacity: 0.6;
    }
  }
`; 

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong{
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
`; 

export const FormSearch = styled.form`
  margin-top: 3.2rem;

  label{
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -60px;
  }
`;

export const MainPage = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px){
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;