import React from 'react';
import styles from './ErrorMod.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;