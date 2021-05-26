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
    jobQuote,
    customer,
    film,
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
            <Label>Appointment Date:</Label> {customer.date}
            </DateConfirm>
            <Location>
              <Label>Location:</Label> {customer.address}
            </Location>
            <Service>
              <Label>Vehicle:</Label> {carInfo.car}<br />
              <Label>Service: </Label>{carInfo.job.toUpperCase()} {carInfo.items.length > 0 ? (carInfo.items.map((item) => <span>+ {item} </span>)) : null}<br />
              <Label>Film:</Label> {film}%<br />
              <Label>Estimated Duration:</Label> {carInfo.job.toLowerCase() === 'fullcar' ? `~ 2-3 hours`: `~ 1 hour`}<br />
              <Label>Total:</Label> ${jobQuote}<br />
            </Service>
          </CardContainer>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default Confirmation;
