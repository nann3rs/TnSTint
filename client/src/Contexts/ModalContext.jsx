import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [display, setDisplay] = useState(false);
  const [filmDisplay, setFilmDisplay] = useState(false);
  const [apptDisplay, setApptDisplay] = useState(false);
  const [confirmDisplay, setConfirmDisplay] = useState(false);
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [film, setFilm] = useState('');
  const [carInfo, setCarInfo] = useState({});
  const [jobQuote, setJobQuote] = useState(0);
  const [priceInfo, setPriceInfo] = useState({});
  const [customer, setCustomer] = useState({});
  const getInfo = (endpoint) => fetch(`api/${endpoint}`)
    .then((res) => res.json());

  const makeModal = () => {
    const yearInfo = [];
    const makeInfo = [];

    for (let i = 2021; i >= 1980; i--) {
      yearInfo.push(i);
    }
    setYears(yearInfo);

    getInfo('vehicles/getallmakes?format=json')
      .then((vehicle) => {
        for (let i = 0; i <= 100; i++) {
          makeInfo.push(vehicle.Results[i]['Make_Name']);
        }
        setMakes(makeInfo.sort());
      });
  };

  const getModels = (info) => {
    const modelInfo = [];

    const make = info['make'].toLowerCase();
    getInfo(`vehicles/getmodelsformakeyear/make/${make}/modelyear/${info.year}/vehicleType/passenger?format=json`)
      .then((vehicle) => {
        vehicle['Results'].forEach((car) => {
          modelInfo.push(car['Model_Name']);
        })
        setModels(modelInfo);
      });
  };

  const toggleModal = () => {
    setDisplay(!display);
  };

  const toggleFilmModal = () => {
    setFilmDisplay(!filmDisplay);
  };

  const toggleApptModal = () => {
    setApptDisplay(!apptDisplay);
  };

  const toggleConfirm = () => {
    setConfirmDisplay(!confirmDisplay);
  };

  const updateCarInfo = (obj) => {
    setCarInfo(obj);
  };

  const updatePriceInfo = (obj) => {
    setPriceInfo(obj);
  };

  const updateJobQuote = (price) => {
    setJobQuote(price);
  };

  const updateCustomer = (info) => {
    setCustomer(info);
  };

  const updateFilm = (data) => {
    setFilm(data);
  };

  return (
    <ModalContext.Provider value={{
      display,
      filmDisplay,
      toggleModal,
      toggleFilmModal,
      makeModal,
      getModels,
      years,
      makes,
      models,
      carInfo,
      film,
      priceInfo,
      jobQuote,
      updateCarInfo,
      updatePriceInfo,
      updateJobQuote,
      apptDisplay,
      toggleApptModal,
      toggleConfirm,
      confirmDisplay,
      customer,
      updateCustomer,
      updateFilm,
    }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
