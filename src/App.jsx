/* ---- IMPORTS ---- */
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';

function App() {
  /* ---- NORMALES JS ---- */
  const recipesArchive = [
    {
      title: 'Pizza',
      difficulty: 'medium',
      duration: 30,
    },
    {
      title: 'Ingwer Smoothie',
      difficulty: 'low',
      duration: 5,
    },
    {
      title: 'Zucchini Auflauf',
      difficulty: 'high',
      duration: 50,
    },
  ];

  const [cookingTimer, setCookingTimer] = useState(0);

  function setTimer(recipeDuration) {
    setCookingTimer(recipeDuration);
  }

  /*   ---- JSX-Teil ---- */
  /* Alles, was nicht aussieht wie HTML oder Textinhalt ist, muss in geschweifte Klammern! "Fenster zu normalem JS" */
  return (
    <div>
      {/* HEADER */}
      <Header timer={cookingTimer} />
      <main>
        {/*  REZEPTKARTEN */}

        {recipesArchive.map((recipe, index) => (
          <RecipeCard key={index} singleRecipe={recipe} onSetTimer={setTimer} />
        ))}
      </main>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ---- STYLED-COMPONENTS ---- */

export default App;
