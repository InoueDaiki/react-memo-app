import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Layout({
  children,
  title = "Reactで作るメモ帳アプリ",
}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar bg="dark" variant="dark" expand="sm">
        <Link href="/">
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav className="ml-auto" activeKey={router.pathname}>
            <Link href="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link href="/todo">
              <Nav.Link href="/todo">Todo</Nav.Link>
            </Link>
            <Link href="/memo">
              <Nav.Link href="/memo">Memo</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-3">{children}</Container>
    </div>
  );
}
