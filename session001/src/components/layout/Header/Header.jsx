import mbdsLogo from './../../../assets/mbds.svg'
import Menu from '../../ui/Menu/Menu'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
      <div className={styles.content}>
        <img src={mbdsLogo} className={styles.logo} alt="MBDS logo" />
        <h1 className={styles.title}>Introduction à React</h1>
        <h2 className={styles.subtitle}>A la découverte des premières notions de React</h2>
      </div>
    </header>
  )
}

export default Header