import styles from './style.module.css';

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
