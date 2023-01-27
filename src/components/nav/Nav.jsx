import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={style.content_search}>
      <Link to="/about" className={`${style.link}`}>About</Link>
      <Link to="home" className={`${style.link}`}>Home</Link>
      <Link to="/favorites" className={`${style.link}`}>Favorites</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
