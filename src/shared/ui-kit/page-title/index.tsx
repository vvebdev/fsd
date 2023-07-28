import styles from './styles.module.css';

interface PageTitleProps {
  children: React.ReactNode;
}

function PageTitle({ children }: PageTitleProps) {
  return <h1 className={styles.regular}>{children}</h1>;
}

export default PageTitle;
