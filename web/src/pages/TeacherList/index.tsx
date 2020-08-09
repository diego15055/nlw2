import React from 'react';
// import { Link } from 'react-router-dom';
import { PageTeacherList, FormSearch, InputBlock, MainPage} from './styles'
import PageHeaderComponent from '../../components/PageHeader';
import TeacherItemComponent from '../../components/TeacherItem';

function TeacherList() {

  return (

    <PageTeacherList className="container" id="page-teacher-list">

      <PageHeaderComponent title="Estes sao os Proffys disponiveis.">
        <FormSearch id="search-teacher">

          <InputBlock>
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject"/>
          </InputBlock>

          <InputBlock>
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day"/>
          </InputBlock>

          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </InputBlock>

        </FormSearch>
      </PageHeaderComponent>

      <MainPage>
        <TeacherItemComponent />
        <TeacherItemComponent />
        <TeacherItemComponent />
        <TeacherItemComponent />
        <TeacherItemComponent />
      </MainPage>
    </PageTeacherList>
  );
}

export default TeacherList;