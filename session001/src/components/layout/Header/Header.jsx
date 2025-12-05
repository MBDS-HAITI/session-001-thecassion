import Menu from '../../ui/Menu/Menu'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
    </header>
  )
}

export default Header