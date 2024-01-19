import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile } from "./style";

export function Header() {
  return (
    <Container>
      <a href="/" className="Title">
        RocketMovies
      </a>
      <Input placeholder={"Pesquisar"} />
      <Profile>
        <section>
          <Link to={"/profile"}>
            <h1>Eduardo Barroso</h1>
          </Link>
          <button>sair</button>
        </section>
        <img src="https://github.com/eduardoB7.png" alt="" />
      </Profile>
    </Container>
  );
}
