import { NavLink } from 'react-router'

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav

/*
  使用 Link 组件来创建一个链接，它会渲染一个 <a> 标签
  Link 组件的 to 属性指定了链接的目标 URL
  当用户点击链接时，React Router 会阻止默认的页面刷新行为，而是使用路由的方式来渲染新的页面
  这样用户就可以在不刷新页面的情况下浏览不同的页面

  NavLink 组件和 Link 组件的功能类似，但是 NavLink 组件会在链接匹配当前 URL 时添加一个 active 类名
*/
