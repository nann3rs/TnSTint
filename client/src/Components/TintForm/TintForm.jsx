import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  const {
    display,
    toggleModal,
    getModels,
    years,
    makes,
    models,
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

  return display ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleModal}><AiOutlineClose /></CloseIcon>
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
            <Radio type="radio" value="doors" name="radio" onChange={showButton} /> 2 Front Doors <br />
            <Radio type="radio" value="fullCar" name="radio" /> Full Car <br />
            <Radio type="radio" value="removal" name="radio" /> Removal Only <br />
          </RadioContainer>
          <CheckboxContainer>
            <Label>Additional Items: </Label><br />
            <Checkbox type="checkbox" checked="" onChange="" />
            <span> + Front Strip</span><br />
            <Checkbox type="checkbox" checked="" onChange="" />
            <span> + Sunroof</span><br />
            <Checkbox type="checkbox" checked="" onChange="" />
            <span> + Windshield</span><br />
          </CheckboxContainer>
          {info ? <Button primary big bigFont bigRadius onClick="">Choose Film</Button> : null}
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default TintForm;
