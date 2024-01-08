import { Container } from "./style";

export function Input({ icon: Icon, ...res }) {
  return (
    <Container>
      {Icon && <Icon size={20} />} {/* Renderiza o ícone como um componente */}
      <input {...res} />
    </Container>
  );
}
