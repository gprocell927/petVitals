import React from 'react'
import { Link } from 'react-router'
const LogIn = ({ handleSubmit }) => {

  let username

  return (
    <section className="logInForm">
      <aside className="title-header" />
      <form className="clipboard"
            onSubmit={ (e) => {
              e.preventDefault()

        let info = {
          username: username.value
        }
            handleSubmit(info)
        }}>

        <input
          className="username"
          placeholder="USERNAME"
          type="text"
          ref={ (node) => { username = node }}
        />
        <input
          className="password"
          placeholder="PASSWORD"
          type="password"
        />
        <Link to="/patientsetup">
        <button
          className="logInButton"
          children="Log In"
        />
        </Link>
      </form>
    </section>
  )
}

export default LogIn
