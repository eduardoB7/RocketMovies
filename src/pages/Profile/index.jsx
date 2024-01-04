import { Container } from "./style";

import { GoArrowLeft } from "react-icons/go";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText icon={GoArrowLeft} texContent={"Voltar"} />
      </header>
    </Container>
  );
}
