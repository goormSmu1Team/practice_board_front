import React from 'react'
import styles from './LogIn.module.scss'

function LogIn() {
  return (
    <div className={styles.container}>
    <form className={styles["input-container"]}>
      <h2>LogIn</h2>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder='email' />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder='password' />
      </div>
      <button type="submit" className={styles["submit-button"]}>LogIn</button>
    </form>
  </div>
  )
}

export default LogIn