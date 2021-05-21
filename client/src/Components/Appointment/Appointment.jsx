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
  Label,
  Form,
  Text,
  BigText,
} from '../TintForm/TintForm.styles.jsx';


const Appointment = () => {
  // const [apptBtn, setApptBtn] = useState(false);
  const [film, setFilm] = useState('');
  const {
    apptDisplay,
    toggleApptModal,
    toggleConfirm,
    jobQuote,
  } = useContext(ModalContext);

  // const showApptButton = () => {
  //   setApptBtn(true);
  // }

  return apptDisplay ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleApptModal}><AiOutlineClose /></CloseIcon>

          <THead>
              Your Quote <br/>
          </THead><br />
          <BigText>${jobQuote}</BigText><br />
          <Form>
            <Label>First Name</Label><br />
            <Text type="text" id="firstName" name="firstName" placeholder="First Name" onChange="" required/><br />
            <Label>Last Name</Label><br />
            <Text type="text" id="lastName" name="lastName" placeholder="Last Name" onChange="" required/> <br />
            <Label>Email</Label><br />
            <Text type="email" id="email" name="email" placeholder="Email" onChange="" required/> <br />
            <Label>Phone Number</Label><br />
            <Text type="number" id="phoneNum" name="phoneNum" placeholder="Phone Number" onChange="" required/> <br />
            <Label>Appointment Date</Label><br />
            <Text type="date" id="start" name="date" onChange="" required/> <br />
          </Form>

          <Button primary big bigFont bigRadius onClick={toggleConfirm}>Make an Appointment</Button>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default Appointment;
