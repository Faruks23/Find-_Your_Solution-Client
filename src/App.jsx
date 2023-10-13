import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <>
      {/* header */}
      <Header></Header>

      {/* main  */}
      <div className="main  min-h-[calc(100vh-60px)]">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;