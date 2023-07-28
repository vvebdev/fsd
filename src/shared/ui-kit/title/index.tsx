import styles from './styles.module.css';

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <h1 className={styles.regular}>{children}</h1>;
}

export default Title;
