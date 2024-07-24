import { CatchPage, HomePage, PokemonPage } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catch" element={<CatchPage />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
