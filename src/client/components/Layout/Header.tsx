function Header({ title }: { title: string }) {
  return (
    <header>
      <p style={{ fontSize: "100px", marginBottom: "3rem" }}>{title}</p>
    </header>
  );
}

export default Header;
