import React, { useState, useEffect } from 'react';
import Mainpage from '../components/Mainpage/Mainpage';

import axios from 'axios';
import './App.scss';

function App() {
  let [data, setData] = useState('');
  let [target, setTarget] = useState('');
  let [background, setBackground] = useState(false);
  useEffect(
    () =>
      axios
        .get(
          'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-091?Authorization=CWB-F02BC70E-D6D5-402E-850E-8C77C8FDC3A3&format=JSON'
        )
        .then((response) => {
          setData(response.data.cwbopendata.dataset.locations.location);
          console.log(response.data.cwbopendata.dataset.locations.location);
        })
        .catch((error) => console.log(error)),
    []
  );

  let handleChange = (value) => {
    if (value) {
      setTarget(...data.filter((datas) => datas.locationName == value));
    } else {
      return 'doesnt have a value';
    }
  };

  let targetData = () => {
    return target;
  };

  let colorBackground = {
    background: 'linear-gradient(to bottom,  #D8DCDF, #7E7E7E)',
  };

  return (
    <div className="app vh-100" style={background ? colorBackground : null}>
      <Mainpage
        handleChange={handleChange}
        targetData={targetData}
        setBackground={setBackground}
      />
    </div>
  );
}

export default App;
