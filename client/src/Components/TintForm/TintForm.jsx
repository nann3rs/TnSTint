import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import { Button } from '../../GlobalStyles';
import {
  ModalWrapper,
  ModalBackdrop,
  ModalBox,
  CloseIcon,
  THead,
  Select,
  SelectContainer,
  Radio,
  RadioContainer,
  Checkbox,
  CheckboxContainer,
  Label,
} from './TintForm.styles.jsx';

const TintForm = () => {
  const [info, setInfo] = useState(false);
  const [newYear, setNewYear] = useState(0);
  const [job, setJob] = useState(null);
  const [items, setItems] = useState([]);
  const {
    display,
    toggleModal,
    toggleFilmModal,
    getModels,
    years,
    makes,
    models,
    updateCarInfo,
  } = useContext(ModalContext);

  let newMake;

  const updateYear = (e) => {
    setNewYear(e.target.value);
  }

  const updateMake = (e) => {
    newMake = e.target.value;
    getModels({year: newYear, make: newMake});
  }

  const showButton = () => {
    setInfo(true);
  }

  const getFilm = () => {
    updateCarInfo({
      job: job,
      items: items,
    });
    setInfo(false);
    toggleModal();
    toggleFilmModal();
  }

  const getItems = (e) => {
    if (e.target.checked) {
      let newItems = items;
      newItems.push(e.target.value);
      let uniqueItems = [...new Set(newItems)];
      setItems(uniqueItems);
    } else {
      let newItems = items;
      newItems = newItems.filter((item) => (
        item === e.target.value
      ));
      setItems(newItems);
    }
  }

  const updateJob = (e) => {
    setJob(e.target.value);
  }

  return display ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={() => {toggleModal(); setInfo(false);}}><AiOutlineClose /></CloseIcon>
          <THead>
              Select your Year, Make, & Model
          </THead><br />
          <SelectContainer>
            <Select id="year" onChange={updateYear}>
              <option value="none">Select a Year</option>
              {years.map((year) => <option id={year} name={year}>{year}</option>)}
            </Select>
            <Select id="make" onChange={updateMake}>
              <option value="none">Select a Make</option>
              {makes.map((make) => <option id={make} name={make}>{make}</option>)}
            </Select>
            <Select id="model">
              <option value="none">Select a Model</option>
              {models.map((model) => <option id={model} name={model}>{model}</option>)}
            </Select>
          </SelectContainer>
          <RadioContainer>
            <Label>Pick One: </Label><br />
            <Radio type="radio" id="doors" value="65" name="radio" onChange={(e) => {updateJob(e); showButton();}} /> 2 Front Doors <br />
            <Radio type="radio" id="fullCar" value="185" name="radio" onChange={(e) => {updateJob(e); showButton();}} /> Full Car <br />
            <Radio type="radio" id="removal" value="80" name="radio" onChange={(e) => {updateJob(e); showButton();}} /> Removal Only <br />
          </RadioContainer>
          <CheckboxContainer>
            <Label>Additional Items: </Label><br />
            <Checkbox type="checkbox" id="frontStrip" name="item" value="20"  onChange={getItems} />
            <label> + Front Strip</label><br />
            <Checkbox type="checkbox" id="sunRoof" name="item" value="40" onChange={getItems} />
            <label> + Sunroof</label><br />
            <Checkbox type="checkbox" id="windshield" name="item" value="150" onChange={getItems} />
            <label> + Windshield</label><br />
          </CheckboxContainer>
          {info ? <Button primary big bigFont bigRadius onClick={getFilm}>Choose Film</Button> : null}
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default TintForm;
