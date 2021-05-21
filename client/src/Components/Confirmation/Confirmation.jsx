import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import { Button } from '../../GlobalStyles';
import { CardContainer, DateConfirm, Location, Service } from './Confirmation.styles.jsx';
import {
  ModalWrapper,
  ModalBackdrop,
  ModalBox,
  CloseIcon,
  THead,
  Radio,
  RadioContainer,
  Label,
  BigText,
} from '../TintForm/TintForm.styles.jsx';


const Confirmation = () => {
  const {
    toggleConfirm,
    confirmDisplay,
    carInfo,
  } = useContext(ModalContext);

  return confirmDisplay ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleConfirm}><AiOutlineClose /></CloseIcon>
          <BigText>
              Appointment Confirmation <br/>
          </BigText><br />
          <CardContainer>
            <DateConfirm>
              Appointment Time
            </DateConfirm>
            <Location>
              Address of Customer
            </Location>
            <Service>
              Service: {carInfo.job} <br />
              Film: <br />
              Estimated Duration: <br />
              Total: <br />
            </Service>
          </CardContainer>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default Confirmation;
