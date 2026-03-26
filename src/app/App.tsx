import LoginPage from "pages/login/index";
import ProductsPage from "pages/products/index";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from 'shared/ui/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичные роуты */}
        <Route path="/login" element={<LoginPage />} />

        {/* Защищённые роуты */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>

        {/* Редирект по умолчанию */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App