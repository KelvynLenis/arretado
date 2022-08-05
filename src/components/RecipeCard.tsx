import { Link, Route, Routes } from "react-router-dom";
import Recipe from "../pages/Recipe";
import CustomImage from "./CustomImage";

interface recipeProps {
  title: string;
  description?: string;
  slug?: string;
  image: string;
}

export default function RecipeCard({recipe}: any) {

  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-description">
          description
        </p>
        <Link to={`/recipe/${recipe.title}`} className="view-btn">saiba mais</Link>
      </div>
    </div>
  )
}
