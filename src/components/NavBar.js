export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <h1>WatchMark</h1>
      {children}
    </nav>
  );
}
