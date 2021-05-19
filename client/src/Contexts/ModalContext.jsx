import React, { createContext, useState, useContext } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [display, setDisplay] = useState(false);
  const [info, setInfo] = useState([]);
  const [year, setYear] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);

  let allInfo = [];

  // const getProducts = (endpoint) => fetch(`api/${endpoint}`)
  //   .then((res) => res.json());

  const makeModal = () => {
    const yearInfo = [];
    const makeInfo = [];
    const modelInfo = [];

  //   getProducts(`products/${currProduct.currProd}`)
  //     .then((data1) => {
  //       data1.features.forEach((feat) => {
  //         featList1.push(`${feat.value} ${feat.feature}`);
  //         allFeat.push(`${feat.value} ${feat.feature}`);
  //       });
  //       setProd1Char({
  //         name: data1.name,
  //         feat: featList1,
  //       });
  //     });
  //   getProducts(`products/${product}`)
  //     .then((data2) => {
  //       data2.features.forEach((feat) => {
  //         featList2.push(`${feat.value} ${feat.feature}`);
  //         allFeat.push(`${feat.value} ${feat.feature}`);
  //       });
  //       setProd2Char({
  //         name: data2.name,
  //         feat: featList2,
  //       });
  //     });

  //   allFeat = [...new Set(allFeat)];
  //   setCharacteristics(allFeat);
  };

  const toggleModal = () => {
    setDisplay(!display);
  };

  return (
    <ModalContext.Provider value={{
      display,
      toggleModal,
      year,
      make,
      model,
      info,
    }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
