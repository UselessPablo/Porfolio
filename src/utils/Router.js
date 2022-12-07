import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Html from '../components/Html'
import Layout from './Layout';
import Conocimientos from "../components/Conocimientos";
import Javasc from "../components/Javasc";
import Myreactjs from "../components/Myreactjs";
import Info from "../components/Info";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/myreactjs' element={<Myreactjs/>} />
          <Route path='/html' element={<Html />} />
          <Route path='/conocimientos' element={<Conocimientos />} />
          <Route path='/info' element={<Info/>} />
          <Route path='/javascript' element={<Javasc />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default Router