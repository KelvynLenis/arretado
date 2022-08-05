import SearchSection from "../components/SearchSection";
import RecentlyAdded from "../components/RecentlyAdded";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../utils/recipes";

export default function Recipes() {
  return (
    <>
      <RecentlyAdded />
      <SearchSection />
      <div className="recipes-container">
        { recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        )) }        
      </div>
    </>
  )
}
