import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [display, setDisplay] = useState(false);
  const [filmDisplay, setFilmDisplay] = useState(false);
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [carInfo, setCarInfo] = useState({});

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
        setMakes(makeInfo);
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

  const updateCarInfo = (obj) => {
    console.log(obj);
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
      updateCarInfo,
    }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
