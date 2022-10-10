import Categories from '../component/Categories';
import Sort from '../component/Sort';
import PizzaBlock from '../component/PizzaBlock/PizzaBlock';
import Skeleton from '../component/PizzaBlock/Skeleton';


import { useEffect, useState } from 'react';

function Home() {
    const [items, setItems] = useState([]); // pizza MockApi

    const [isLoading, setIsLoading] = useState(true); // skilleton

    const [categoryId, setCatigoryaId] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярності',
        sortProperty: 'raiting'
    });

    useEffect(() => {
        setIsLoading(true); //loading skilleton

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';


        fetch(`https://633005f6f5fda801f8d97d50.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json())
            .then(arr => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0); // Loading pages TOP ! ! !

    }, [categoryId, sortType]);
    return (
        <div className='container'>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onClickCategory={(id) => setCatigoryaId(id)}
                />
                <Sort
                    value={sortType}
                    onChangeSort={(id) => setSortType(id)}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ?
                    [...new Array(8)].map((item, id) => <Skeleton key={id} />) :
                    items.map((pizza, id) => (
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
            </div>
        </div>
    )
}

export default Home;