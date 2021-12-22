function RecipeCard({ singleRecipe, onSetTimer }) {
  return (
    <article>
      <h2>{singleRecipe.title}</h2>
      <p>
        Difficulty is {singleRecipe.difficulty} and takes{' '}
        {singleRecipe.duration}
        minutes.
      </p>
      <button onClick={() => onSetTimer(singleRecipe.duration)}>
        Set timer
      </button>
      {/* sobald wir hier etwas als Parameter übergeben möchten, müssen wir die ausführliche Schreibweise nutzen "() =>" */}
    </article>
  );
}

export default RecipeCard;
