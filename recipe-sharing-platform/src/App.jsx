import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<RecipeDetail />} />
          <Route path="/form" element={<AddRecipeForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;