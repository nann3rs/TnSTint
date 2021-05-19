import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import {
  ModalWrapper,
  ModalBackdrop,
  ModalBox,
  CloseIcon,
  Grid,
  Row,
  Col,
  THead,
} from './TintForm.styles.jsx';


const TintForm = () => {
  const {
    display,
    toggleModal,
    year,
    make,
    model,
    info,
  } = useContext(ModalContext);

  return display ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleModal}><AiOutlineClose /></CloseIcon>
        <Grid>
          <THead>
            <Row>
              <Col size={1}>
                {/* {prod1.name} */}
              </Col>
              <Col size={1}>
                {/* Characteristics */}
              </Col>
              <Col size={1}>
                {/* {prod2.name} */}
              </Col>
            </Row>
          </THead>
          <Row>
            <Col size={1}>
              {/* {characteristics.map((item) => ((prod1.feat.includes(item))
                ? <Row><AiFillCheckCircle color="#32CD32" key={uuidv4()} /></Row> : <Row><AiFillCheckCircle color="#fff" key={uuidv4()} /></Row>
              ))} */}
            </Col>
            <Col size={1}>
              {/* {characteristics.map((char) => (
                <Row key={uuidv4()}>{char}</Row>
              ))} */}
            </Col>
            <Col size={1}>
              {/* {characteristics.map((item) => ((prod2.feat.includes(item))
                ? <Row><AiFillCheckCircle color="#32CD32" key={uuidv4()} /></Row> : <Row><AiFillCheckCircle color="#fff" key={uuidv4()} /></Row>
              ))} */}
            </Col>
          </Row>
        </Grid>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default TintForm;
