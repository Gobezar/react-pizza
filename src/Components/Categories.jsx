import React from "react";


function Categories({value, onClickCategory}) {

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Новинки"
  ]


  // const [categoryIndex, setCategoryIndex] = useState(0);


  // const onClickCategory = (i) => {
  //   setCategoryIndex(i)
  // }

    return (
        <div className="categories">
                <ul>
                {categories.map((categoryName, i) => (
                  <li onClick= {() => onClickCategory(i)} 
                  className={value === i ? 'active' : ''}
                  key={i}>
                  {categoryName}
                  </li>
                ))
                }
                </ul>
              </div>
    )
}

export default Categories;