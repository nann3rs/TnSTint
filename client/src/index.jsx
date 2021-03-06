import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Styled from 'styled-components';
import GlobalStyles from './GlobalStyles.jsx';
import ModalContextProvider from './Contexts/ModalContext.jsx';
import Main from './Components/Main/Main.jsx';
import TintForm from './Components/TintForm/TintForm.jsx';
import FilmForm from './Components/FilmForm/FilmForm.jsx';
import Appointment from './Components/Appointment/Appointment.jsx';
import Confirmation from './Components/Confirmation/Confirmation.jsx';

const Header = Styled.h1`
  text-align: center;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <ModalContextProvider>
        <Main />
        <TintForm />
        <FilmForm />
        <Appointment />
        <Confirmation />
      </ ModalContextProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));