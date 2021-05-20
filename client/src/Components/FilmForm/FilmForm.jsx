import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import { Button } from '../../GlobalStyles';
import { FilmContainer } from './FilmForm.styles.jsx';
import {
  ModalWrapper,
  ModalBackdrop,
  ModalBox,
  CloseIcon,
  THead,
  Radio,
  RadioContainer,
  Label,
} from '../TintForm/TintForm.styles.jsx';


const FilmForm = () => {
  const [quote, setQuote] = useState(false);
  const [film, setFilm] = useState('');
  const { filmDisplay, toggleFilmModal } = useContext(ModalContext);

  const showQuoteButton = () => {
    setQuote(true);
  }

  const updateFilm = (e) => {
    setFilm(e.target.value);
  }

  return filmDisplay ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleFilmModal}><AiOutlineClose /></CloseIcon>

          <THead>
              Select your Film <br/>
          </THead><br />
          <FilmContainer>
            <RadioContainer>
              <Radio type="radio" value="75" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}} /> 75%
              <Radio type="radio" value="35" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}}/> 35%
              <Radio type="radio" value="20" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}}/> 20%
              <Radio type="radio" value="5" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}}/> 5%
            </RadioContainer>
          </FilmContainer>

          {quote ? <Button primary big bigFont bigRadius onClick="">Get Quote</Button> : null}
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default FilmForm;
