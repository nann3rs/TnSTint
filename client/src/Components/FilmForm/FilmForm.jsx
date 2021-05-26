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
  const [filmSelect, setFilmSelect] = useState('');
  const [filmPrice, setFilmPrice] = useState('');
  const {
    filmDisplay,
    toggleFilmModal,
    toggleApptModal,
    priceInfo,
    updateJobQuote,
    updateFilm,
  } = useContext(ModalContext);

  const showQuoteButton = () => {
    setQuote(true);
  }

  const updateFilmSelect = (e) => {
    setFilmSelect(e.target.id);
    setFilmPrice(e.target.value);
  }

  const updateQuote = () => {
    let sum = 0;
    sum += Number.parseInt(priceInfo.job);
    if (priceInfo.items.length > 0) {
      for (let i = 0; i < priceInfo.items.length; i++) {
        sum += Number.parseInt(priceInfo.items[i]);
      }
    }
    sum += Number.parseInt(filmPrice);
    updateJobQuote(sum);
    setQuote(false);
    updateFilm(filmSelect);
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
              <Radio type="radio" id="5" value="100" name="radio" onChange={(e) => { updateFilmSelect(e); showQuoteButton();}} /> 5%
              <Radio type="radio" id="20" value="25" name="radio" onChange={(e) => { updateFilmSelect(e); showQuoteButton();}}/> 20%
              <Radio type="radio" id="35" value="0" name="radio" onChange={(e) => { updateFilmSelect(e); showQuoteButton();}}/> 35%
              <Radio type="radio" id="70" value="0" name="radio" onChange={(e) => { updateFilmSelect(e); showQuoteButton();}}/> 70%
            </RadioContainer>
          </FilmContainer>

          {quote ? <Button primary big bigFont bigRadius onClick={updateQuote}>Get Quote</Button> : null}
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default FilmForm;
