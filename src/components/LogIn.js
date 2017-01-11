import React from 'react'

const LogIn = () => {
  return (
    <section className="logInForm">
      <aside className="title-header" />
      <form className="clipboard">
        <input
          className="username"
          placeholder="USERNAME"
          type="text"
        />
        <input
          className="password"
          placeholder="PASSWORD"
          type="password"
        />
        <button
          className="logInButton"
          children="Log In"
        />
      </form>
    </section>
  )
}

export default LogIn
