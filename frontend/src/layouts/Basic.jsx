function Basic({ children }) {
  return (
    <div>
      <header style={{ background: "#eee", padding: "10px" }}>
        <h2>My App</h2>
      </header>

      <main style={{ padding: "20px" }}>{children}</main>

      <footer
        style={{ background: "#eee", padding: "10px", marginTop: "20px" }}
      >
        <small>© 2025 My App</small>
      </footer>
    </div>
  );
}

export default Basic;
