import React from 'react';
import 'antd/dist/antd.css';
import { } from '@ant-design/icons';
import './App.css';

import CoworkingPlug from './components/CoworkingPlug';
import Coworking from './components/Coworking';
import ChooseSubscibeTerm from './components/modals/ChooseSubscibeTerm';
import PaymentMethod from './components/modals/PaymentMethod';


function App() {
  return (
    <div className="App">
      {/* <CoworkingPlug /> */}
      <Coworking />
      {/* <ChooseSubscibeTerm /> */}
      {/* <PaymentMethod /> */}
    </div>
  );
}

export default App;
