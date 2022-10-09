import Categories from '../component/Categories';
import Sort from '../component/Sort';
import PizzaBlock from '../component/PizzaBlock/PizzaBlock';
import Skeleton from '../component/PizzaBlock/Skeleton';


import { useEffect, useState } from 'react';

function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetch('https://633005f6f5fda801f8d97d50.mockapi.io/pizzas')
            .then(res => res.json())
            .then(arr => {
                setItems(arr);
                setIsLoading(false);
            });

    }, []);
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
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
        </>
    )
}

export default Home;