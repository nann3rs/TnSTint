import React, { useContext, useState } from 'react';
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
  const {
    filmDisplay,
    toggleFilmModal,
    toggleApptModal,
    priceInfo,
    updateJobQuote,
  } = useContext(ModalContext);

  const showQuoteButton = () => {
    setQuote(true);
  }

  const updateFilm = (e) => {
    setFilm(e.target.value);
  }

  const updateQuote = () => {
    let sum = 0;
    sum += Number.parseInt(priceInfo.job);
    if (priceInfo.items.length > 0) {
      for (let i = 0; i < priceInfo.items.length; i++) {
        sum += Number.parseInt(priceInfo.items[i]);
      }
    }
    sum += Number.parseInt(film);
    updateJobQuote(sum);
    setQuote(false);
    toggleFilmModal();
    toggleApptModal();
  }

  return filmDisplay ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={() => {toggleFilmModal(); setQuote(false);}}><AiOutlineClose /></CloseIcon>

          <THead>
              Select your Film <br/>
          </THead><br />
          <FilmContainer>
            <RadioContainer>
              <Radio type="radio" value="100" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}} /> 5%
              <Radio type="radio" value="25" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}}/> 20%
              <Radio type="radio" value="0" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}}/> 35%
              <Radio type="radio" value="0" name="radio" onChange={(e) => { updateFilm(e); showQuoteButton();}}/> 70%
            </RadioContainer>
          </FilmContainer>

          {quote ? <Button primary big bigFont bigRadius onClick={updateQuote}>Get Quote</Button> : null}
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default FilmForm;
