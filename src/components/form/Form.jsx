import React from "react";
import s from "./form.module.css";
import validation from "./validation";

export default function Form(props) {
  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const handleinputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    props.login(userData)
  }
  return (
    <div className={s.container}>
      <form className={s.container_form} onSubmit={handleSubmit}>
      <h2>Complete sus datos</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="username"
          value={userData.username}
          onChange={handleinputChange}
          placeholder="email"
          className={s.input_form}
        />
        {
          errors.username?<span style={{color:"red"}}>{errors.username}</span>:null
        }
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          valur={userData.password}
          onChange={handleinputChange}
          placeholder="password"
          className={s.input_form}
        />
        {errors.password?<span style={{color:"red"}}>{errors.password}</span>:null}
        <div className={s.content_submit}>
        <input type="submit" className={s.input_submit} />
        </div>
      </form>
    </div>
  );
}
