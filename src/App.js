
import './app.scss';

import Header from './component/Header';
import Categories from './component/Categories';
import Sort from './component/Sort';
import PizzaBlock from './component/PizzaBlock';
import { useState } from 'react';

const pizzas = [
  {
    id: 0,
    title: "1 сира",
    image: "img/pizza/1.jpg",
    types: [0],
    sizes: [26],
    price: 500,
    category: 0,
    rating: 4
  },
  {
    id: 1,
    title: "2 сира",
    image: "img/pizza/2.jpg",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 600,
    category: 0,
    rating: 1
  },

  {
    id: 2,
    title: "5 сира",
    image: "img/pizza/4.jpg",
    types: [1],
    sizes: [30, 40],
    price: 800,
    category: 0,
    rating: 4
  },
  {
    id: 3,
    title: "6 сира",
    image: "img/pizza/5.jpg",
    types: [0, 1],
    sizes: [26, 40],
    price: 400,
    category: 0,
    rating: 3
  },
  {
    id: 4,
    title: "1 сир",
    image: "img/pizza/6.jpg",
    types: [1],
    sizes: [26, 30, 40],
    price: 200,
    category: 0,
    rating: 2
  },
];

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((pizza, id) => (
                <PizzaBlock
                  key={id}
                  // title={pizza.title}
                  // types={pizza.types}
                  // price={pizza.price}
                  // image={pizza.image}
                  // sizes={pizza.sizes}
                  {...pizza} // SPRET OPERATOR !!!


                />
              ))}
              
              {/* <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li >
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">от 395 ₽</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
