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
            <h1>{data.movie}</h1>
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
            <span>Por {data.user}</span>
            <section className="date">
              {<CiClock2 />}
              <span>23/05/22 às 08:00</span>
            </section>
          </section>

          <section className="tags">
            <TagArea>
              {data.tags.map((tag) => (
                <span key={tag.id}>{(tag.title = "ficção cientifica")}</span>
              ))}
            </TagArea>
          </section>

          <section className="sinopse">{data.sinopse}</section>
        </main>
      </Content>
    </Container>
  );
}
