import React from 'react';

import PageHeaderComponent from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import { PageTeacherForm, MainForm, DivForm, FooterForm } from './styles';


function TeacherForm(){

  return (

    <PageTeacherForm className="container" id="page-teacher-form">
       <PageHeaderComponent 
        title="Que incrivel que voce quer dar aulas!" 
        description="O primeiro passo é preencher este formulario de inscriçao"
      />

      <MainForm>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>
          
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Materia"/>
          <Input name="cost" label="Custo da sua hora por aula"/>

        </fieldset>


        <FooterForm>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </FooterForm>

      </MainForm>
    </PageTeacherForm>
  )
}


export default TeacherForm;