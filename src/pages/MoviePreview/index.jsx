import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { GoArrowLeft } from "react-icons/go";

export function MoviePreview() {
  return (
    <>
      <Header />
      <ButtonText icon={GoArrowLeft} texContent={`Voltar`} />
    </>
  );
}
