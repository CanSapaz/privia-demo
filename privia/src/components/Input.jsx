import React from 'react'
import Logo from "./Logo.jsx";



function Input({ error, name, handleChange, value, id, inputType }) {

    const className = error ? "form-control is-invalid" : "form-control";

  return (
    <div class="login-box">
        <div className="login-logo">
        <Logo src={"./img/Privia_logo.png"} height={"41px"} width={"145px"} />
      </div>
  <form>
    <div class="user-box">
      <input
        name={name}
        id={id}
        className={className}
        onChange={handleChange}
        value={value}
        type={inputType}
      />
      <label>Username</label>
    </div>
    <div class="user-box">
      <input
        name={name}
        id={id}
        className={className}
        onChange={handleChange}
        value={value}
        type={inputType}
      />
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
  )
}

export default Input