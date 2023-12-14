import { Input } from "../Input";
import { Container, Profile } from "./style";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
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
