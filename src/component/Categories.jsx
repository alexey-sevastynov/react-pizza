import { useState } from "react";

function Categories() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = ['Усі', 'Мясні', 'Травянні', 'Гриль', 'Острі', 'Закриті'];

    const onClickCategory = (id) => {
        setActiveCategory(id);
    }

    return (
        <div className="categories" >
            <ul>
                {categories.map((category, id) => (
                    <li
                        className={activeCategory === id ? "active" : ""}
                        key={id}
                        onClick={() => onClickCategory(id)}

                    >{category}
                    </li>
                ))}

            </ul>
        </div >
    )
}

export default Categories;