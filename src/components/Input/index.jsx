import { Container } from "./style";

export function Input({ placeholder }) {
  return (
    <Container>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
}
