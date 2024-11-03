import React, { Suspense } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";

const RecipeDetailPage = React.lazy(() => import("./pages/RecipeDetailPage/RecipeDetailPage"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
