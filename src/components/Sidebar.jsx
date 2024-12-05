import { Outlet } from 'react-router'
import AppNav from './AppNav'
import Logo from './Logo'
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar

// Outlet 决定了嵌套路由组件的渲染位置
