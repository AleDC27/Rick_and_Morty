import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import { getFavorites } from "../redux/action/action";
import SearchBar from "../searchBar/SearchBar";
import style from "./nav.module.css";

export default function Nav({ onSearch, random }) {
  // const dispatch=useDispatch();
  // const handleOnClick=(e)=>{
  //   e.preventDefault();
  //   dispatch(getFavorites())
  // }
  return (
    <div className={style.content_search}>
      <Link to="/about" className={`${style.link}`}>About</Link>
      <Link to="home" className={`${style.link}`}>Home</Link>
      <Link to="/favorites" className={`${style.link}`} /* onClick={handleOnClick} */>Favorites</Link>
      <Link to="/" className={`${style.link}`}>Logout</Link>
      <SearchBar onSearch={onSearch} random={random} />
    </div>
  );
}
