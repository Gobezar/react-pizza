import React, {useState, createContext} from "react";
import {Routes, Route} from 'react-router-dom';
import './scss/app.scss'
import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = createContext()

function App() {

const [searchValue, setSearchValue] = useState('')


  return (
      <div className="wrapper">
       <SearchContext.Provider value = {{searchValue, setSearchValue}}>
s
       <Header />
        <div className="content">
          <div className="container">
           <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='Cart' element={<Cart/>}/>

           </Routes>
          </div>
        </div>

       </SearchContext.Provider>
      </div>

  );
}

export default App;
