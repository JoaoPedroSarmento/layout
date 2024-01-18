import Link from "next/link";

export default function Header() {
  const estilosLink = {
    textDecoration: "none",
    color: "#999",
  };
  return (
    <header>
      <h1>[nome]</h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
          }}
        >
          <li>
            <Link href="/" style={estilosLink}>
              Página inicial
            </Link>
          </li>
          <li>
            <Link href="/cursos" style={estilosLink}>
              Cursos disponíveis
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
