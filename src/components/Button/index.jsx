import { Container } from "./style";

export function Button({ icon: Icon, texContent, width }) {
  return (
    <Container $width={width} type="button">
      {Icon && <Icon size={18} />}
      {texContent}
    </Container>
  );
}
