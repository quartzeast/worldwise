import { BrowserRouter, Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    // React Router 只会匹配一个 Route，所以我们需要将 Route 组件包裹在 Routes 组件中
    // 当 URL 匹配 Route 组件的 path 时，Route 组件会渲染它的 element 属性（React 组件）
    // BrowserRouter 组件并不会渲染任何内容，它只是一个容器，用于包裹所有的路由组件
    // 匹配的组件被渲染到 BrowserRouter 组件所在的位置，App 组件的其他部分会在所有 URL 中保持不变
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
