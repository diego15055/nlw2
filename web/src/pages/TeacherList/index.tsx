import React from 'react';
// import { Link } from 'react-router-dom';
import { PageTeacherList, FormSearch, MainPage} from './styles'
import PageHeaderComponent from '../../components/PageHeader';
import TeacherItemComponent from '../../components/TeacherItem';
import Input from '../../components/Input';

function TeacherList() {

  return (

    <PageTeacherList className="container" id="page-teacher-list">

      <PageHeaderComponent title="Estes sao os Proffys disponiveis.">
        <FormSearch id="search-teacher">

          <Input name="subject" label="Materia"/>
          <Input name="week_day" label="Dia da Semana"/>
          <Input type="time" name="time" label="Hora"/>

        </FormSearch>
      </PageHeaderComponent>

      <MainPage>
        <TeacherItemComponent />
        <TeacherItemComponent />

      </MainPage>
    </PageTeacherList>
  );
}

export default TeacherList;