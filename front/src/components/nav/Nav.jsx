import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import { getFavorites } from "../redux/action/action";
import SearchBar from "../searchBar/SearchBar";
import style from "./nav.module.css";

export default function Nav({ onSearch, random }) {

  return (
    <div className={style.content_search}>
      <Link to="/about" className={`${style.link}`}>About</Link>
      <Link to="home" className={`${style.link}`}>Home</Link>
      <Link to="/favorites" className={`${style.link}`}>Favorites</Link>
      <Link to="/" className={`${style.link}`}>Logout</Link>
      {/* <Link to='/createChar' className={`${style.link}`} >Create Chart</Link> */}
      <SearchBar onSearch={onSearch} random={random} />
    </div>
  );
}
