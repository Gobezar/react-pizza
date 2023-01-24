import React, {useState, useEffect, useContext} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import Sort from "../Components/Sort";
import Categories from "../Components/Categories";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import Pagination from '../Components/Pagination';
import { SearchContext } from '../App';
import {setCategoryId} from '../redux/slices/filterSlice'



export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {categoryId, sort} = useSelector((state) => state.filter);
    const sortType = sort.sortProperty;
    const page = useSelector((state) => state.pagination.page)
    const {searchValue} = useContext(SearchContext)
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    // const [page, setPage] = useState(1);


    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
        }
    }, [])

    useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `search=${searchValue}` : '' ;
        const pages = `page=${page}&limit=5`

        axios.get (`https://63a6cbe359fd83b1bb3819f4.mockapi.io/items-react-pizza?${pages}&${category}${search}&sortBy=${sortType}&order=desc`)
        .then ((res) => {
            setItems(res.data);
            setIsLoading(false);
        })
        window.scrollTo(0,0)
      }, [categoryId, sortType, searchValue, page])


        useEffect(() => {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                page,
            })
            navigate(`?${queryString}`)
        }, [categoryId, sort.sortProperty, page])

      const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
      const pizzas = items.map((obj, index) => (
        <PizzaBlock
            title={obj.title}
            price={obj.price}
            image={obj.imageUrl}
            sizes={obj.sizes}
            types={obj.types}
            id={obj.id}
            key={obj.id}
        />
    ))

 
    return (
        <div>

            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(i) => onChangeCategory(i)}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoading ? skeleton : pizzas}
            </div>
            <Pagination page={page} />

        </div>
    )
}

export default Home