import styles from "./Button.module.css"

const Button = ({ texto, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{texto}</button>;
};

export default Button;
