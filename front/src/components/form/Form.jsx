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
      <h2>Complete your data</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="username"
          value={userData.username}
          onChange={handleinputChange}
          placeholder="Email"
          className={s.input_form}
          autoComplete="username"
        />
        {
          errors.username?<span className={s.error}>{errors.username}</span>:null
        }
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleinputChange}
          placeholder="Password"
          className={s.input_form}
          autoComplete="current-password"
        />
        {errors.password?<span className={s.error}>{errors.password}</span>:null}
        <div className={s.content_submit}>
        <input type="submit" className={s.input_submit} />
        </div>
      </form>
    </div>
  );
}
