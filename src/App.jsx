/* ---- IMPORTS ---- */
import { useState } from 'react';

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
      <header>
        <h1>Recipes for React</h1>
        <p>Time until your chosen meal is ready: {cookingTimer}</p>
      </header>
      <main>
        {/*  REZEPTKARTEN */}

        {recipesArchive.map((recipe, index) => (
          <article key={index}>
            <h2>{recipe.title}</h2>
            <p>
              Difficulty is {recipe.difficulty} and takes {recipe.duration}
              minutes.
            </p>
            <button onClick={() => setTimer(recipe.duration)}>Set timer</button>
            {/* sobald wir hier etwas als Parameter übergeben möchten, müssen wir die ausführliche Schreibweise nutzen "() =>" */}
          </article>
        ))}
      </main>
      {/* FOOTER */}
      <footer>
        <nav>
          <a href="/">Home</a>{' '}
          {/* Dummy Links - sollten in React Router durch NavLinks ersetzt werden */}
          <a href="/click">Page 1</a>
          <a href="/characters">Page 2</a>
        </nav>
      </footer>
    </div>
  );
}

/* ---- STYLED-COMPONENTS ---- */

export default App;
