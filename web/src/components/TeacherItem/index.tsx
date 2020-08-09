import React from 'react';

import { ArticleTeacher, HeaderTeacher, DivAboutTeacher, FooterTeacher } from './styles';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItemComponent()  {
  return(
    <ArticleTeacher>

      <HeaderTeacher>
        <img src="https://avatars2.githubusercontent.com/u/39443535?s=460&u=05d3314a336c464de6390ce2be81324df0bac62a&v=4"/>
        <DivAboutTeacher>
          <strong>Diego Santos</strong>
          <span>Lorem</span>
        </DivAboutTeacher>
      </HeaderTeacher>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><br/>
        Earum delectus a at doloribus eligendi, alias fugiat excepturi, similique iusto aliquid facere atque. 
      </p>
      <FooterTeacher>
        <p>
          Preço/hora:
          <strong> R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </FooterTeacher>

    </ArticleTeacher>
  );
}

export default TeacherItemComponent;