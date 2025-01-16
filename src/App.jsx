import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { Suspense } from "react";
import CatalogDetailsPage from "./pages/CatalogDetailsPage/CatalogDetailsPage";

function App() {
  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/campers/:id" element={<CatalogDetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
