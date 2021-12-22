function Footer() {
  return (
    <footer>
      <nav>
        <a href="/">Home</a>{' '}
        {/* Dummy Links - sollten in React Router durch NavLinks ersetzt werden */}
        <a href="/click">Page 1</a>
        <a href="/characters">Page 2</a>
      </nav>
    </footer>
  );
}

export default Footer;
