import {
  Routes,
  Route,
} from "react-router-dom";
import './app.scss';

import Header from './component/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from "./pages/Cart";





import { useState } from 'react';

const pizzas = [
  // {
  //   id: 0,
  //   title: "1 сира",
  //   image: "img/pizza/1.jpg",
  //   types: [0],
  //   sizes: [26],
  //   price: 500,
  //   category: 0,
  //   rating: 4
  // },
  // {
  //   id: 1,
  //   title: "2 сира",
  //   image: "img/pizza/2.jpg",
  //   types: [0, 1],
  //   sizes: [26, 30, 40],
  //   price: 600,
  //   category: 0,
  //   rating: 1
  // },

  // {
  //   id: 2,
  //   title: "5 сира",
  //   image: "img/pizza/4.jpg",
  //   types: [1],
  //   sizes: [30, 40],
  //   price: 800,
  //   category: 0,
  //   rating: 4
  // },
  // {
  //   id: 3,
  //   title: "6 сира",
  //   image: "img/pizza/5.jpg",
  //   types: [0, 1],
  //   sizes: [26, 40],
  //   price: 400,
  //   category: 0,
  //   rating: 3
  // },
  // {
  //   id: 4,
  //   title: "1 сир",
  //   image: "img/pizza/6.jpg",
  //   types: [1],
  //   sizes: [26, 30, 40],
  //   price: 200,
  //   category: 0,
  //   rating: 2
  // },
];

function App() {





  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />

              {/* <NotFound /> */}
            </Routes>


          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
