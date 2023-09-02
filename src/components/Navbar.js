import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/deposit">
            Deposit
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/withdraw">
            Withdraw
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/statement">
            Statement
          </Link>
        </li>
      </ul>
    </div>
  );
}
