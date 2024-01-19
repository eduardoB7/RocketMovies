import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

import { GoArrowLeft } from "react-icons/go";
import { Container, Content } from "./style";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to={"/"}>
          <ButtonText icon={GoArrowLeft} texContent={"Voltar"} />
        </Link>
        <h1>Novo filme</h1>

        <form>
          <section className="InfsMovie">
            <Input placeholder={"Titulo"} />
            <Input
              type={"number"}
              min={"0"}
              max={"5"}
              placeholder={"Sua nota (de 0 a 5)"}
            />
          </section>
          <textarea placeholder="Observações" cols="30" rows="10"></textarea>
          <section className="Marks">
            <h3>Marcadores</h3>
            <section>
              <Tag value={"React"} />
              <Tag value={"Node"} />
              <Tag isNew placeholder={"Novo Marcador"} />
            </section>
          </section>
          <div className="Buttons">
            <button className="button-remove">Excluir Filme</button>
            <button className="button-add">Salvar Filme</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}
