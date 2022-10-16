import Navmenu from "../layout/Navmenu";
import Heading from "../layout/Heading";
import LoginForm from "../components/LoginForm";

export default function login() {
  return (
    <>
      <Navmenu />
      <div className="grid place-content-center">
        <Heading content="Log in" />
        <LoginForm />
      </div>
    </>
  );
}
