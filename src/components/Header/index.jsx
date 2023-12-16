import { Input } from "../Input";
import { Container, Profile } from "./style";

export function Header() {
  return (
    <Container>
      <button className="Title">RocketMovies</button>
      <Input placeholder={"Pesquisar"} />
      <Profile>
        <section>
          <h1>Eduardo Barroso</h1>
          <button>sair</button>
        </section>
        <img src="https://github.com/eduardoB7.png" alt="" />
      </Profile>
    </Container>
  );
}
