import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { GoArrowLeft } from "react-icons/go";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

import { data } from "../../module/data";

import { Container, Content, TagArea } from "./style";

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={GoArrowLeft} texContent={`Voltar`} />
        <main>
          <section>
            <h1>{data.map((movie) => movie.movie)}</h1>
            {/* a avaliação sera adicionada dinamicamente posteriormente, no momento aqui esta apenas para ilustrar */}
            <div className="avaible">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </section>

          <section className="infs">
            <img src="https://www.github.com/eduardoB7.png" alt="" />
            <span>Por {data.map((user) => user.user)}</span>
            <section className="date">
              {<CiClock2 />}
              <span>23/05/22 às 08:00</span>
            </section>
          </section>

          <section className="tags">
            <TagArea>
              {data.map(
                (tag) =>
                  tag.tags.map((tag) => (tag.title = "ficção cientifica")) //por enquanto valores sao arbitrarios
              )}
            </TagArea>
          </section>

          <section className="sinopse">
            {data.map((sinopse) => sinopse.sinopse)}
          </section>
        </main>
      </Content>
    </Container>
  );
}
