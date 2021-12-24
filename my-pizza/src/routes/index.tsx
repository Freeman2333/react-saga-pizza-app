import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/Home';
import Size from '../pages/Size';
import Flavor from '../pages/Flavor';
import Order from '../pages/Order';

const history = createBrowserHistory();

history.listen((arg) => {
  console.log(arg);

  window.scrollTo(0, 0);
});

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-pizza-size" element={<Size />} />
        <Route path="/choose-pizza-flavor" element={<Flavor />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
