import { HiOutlinePlus } from "react-icons/hi2";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <main>
          <header>
            <h1>Meus Filmes</h1>
            <Button
              icon={HiOutlinePlus}
              width={false}
              texContent={"Adicionar"}
            />
          </header>
        </main>
      </Content>
    </Container>
  );
}
