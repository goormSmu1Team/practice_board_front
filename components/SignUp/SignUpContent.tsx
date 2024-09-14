import React from 'react';
import styles from './SignUpContent.module.scss';

function SignUpContent() {
  return (
    <div className={styles.container}>
      <form className={styles["input-container"]}>
        <h2>Sign Up</h2>
        <div className={styles.field}>
          <label htmlFor="nickname">Nickname</label>
          <input id="nickname" type="text" placeholder='nickname' />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder='email' />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder='password' />
        </div>
        <button type="submit" className={styles["submit-button"]}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpContent;
