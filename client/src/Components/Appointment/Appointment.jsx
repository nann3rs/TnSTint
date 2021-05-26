import React, { useContext, useState } from 'react';
import axios from 'axios';
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
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState(null);
  const [date, setDate] = useState(null);
  const [film, setFilm] = useState('');
  const {
    apptDisplay,
    toggleApptModal,
    toggleConfirm,
    jobQuote,
    updateCustomer,
  } = useContext(ModalContext);

  const handlefName = (e) => {
    setFName(e.target.value);
  }

  const handlelName = (e) => {
    setLName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePhone = (e) => {
    setPhoneNum(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  const handlePostSubmit = () => axios({
    method: 'post',
    url: '/sms',
    data: {data: `New appointment on ${date}`},
  })
    .catch((err) => console.log(err));

  const handleSubmit = () => {
    updateCustomer({
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      phoneNum: phoneNum,
      date: date,
    });
    handlePostSubmit();
    toggleApptModal();
    toggleConfirm();
  }

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
            <Text type="text" id="firstName" name="firstName" placeholder="First Name" onChange={handlefName} required/><br />
            <Label>Last Name</Label><br />
            <Text type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={handlelName} required/> <br />
            <Label>Email</Label><br />
            <Text type="email" id="email" name="email" placeholder="Email" onChange={handleEmail} required/> <br />
            <Label>Phone Number</Label><br />
            <Text type="number" id="phoneNum" name="phoneNum" placeholder="Phone Number" onChange={handlePhone} required/> <br />
            <Label>Address</Label><br />
            <Text type="text" id="address" name="address" placeholder="Address" onChange={handleAddress} required/> <br />
            <Label>Appointment Date</Label><br />
            <Text type="date" id="start" name="date" onChange={handleDate} required/> <br />
          </Form>

          <Button primary big bigFont bigRadius onClick={handleSubmit}>Make an Appointment</Button>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default Appointment;
