import React from 'react';

import { PageHeader, TopBarContainer, HeaderContent } from './styles'
import { Link } from 'react-router-dom';

import logImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
  title: string;
}

const PageHeaderComponent: React.FC<PageHeaderProps> = (props) => {


  return (
    <PageHeader className="page-header">

      <TopBarContainer className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
          <img src={logImg} alt="Proffy"/>
      </TopBarContainer>

      <HeaderContent className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </HeaderContent>

      
    </PageHeader>
  );
}

export default PageHeaderComponent;