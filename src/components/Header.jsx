function Header({ timer }) {
  return (
    <header>
      <h1>Recipes for React</h1>
      <p>Time until your chosen meal is ready: {timer}</p>
    </header>
  );
}

export default Header;
