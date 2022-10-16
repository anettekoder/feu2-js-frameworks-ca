import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Navmenu({ children }) {
  const router = useRouter();

  const [user, setUser] = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    router.push("/");
  };

  return (
    <>
      <Nav className="justify-content-start bg-blue-500">
        <Nav.Item>
          <Link href="/" passHref>
            <Nav.Link className={router.pathname == "/" ? "active" : ""}>
              Home
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/contact" passHref>
            <Nav.Link
              eventKey="link-2"
              className={router.pathname == "/contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          {user && (
            <Link href="/admin" passHref>
              <Nav.Link
                eventKey="link-2"
                className={router.pathname == "/admin" ? "active" : ""}
              >
                Admin
              </Nav.Link>
            </Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {!user && (
            <Link href="/login" passHref>
              <Nav.Link
                eventKey="link-2"
                className={router.pathname == "/login" ? "active" : ""}
              >
                Log In
              </Nav.Link>
            </Link>
          )}
        </Nav.Item>

        {user ? (
          <button className="bg-indigo-500" onClick={logout}>
            Log Out
          </button>
        ) : (
          ""
        )}
      </Nav>

      <div className="container text-center">{children}</div>
    </>
  );
}
