import { Container } from "./style";

export function Button({ icon: Icon, texContent, width = false }) {
  return (
    <Container $width={width} type="button">
      {Icon && <Icon size={22} />}
      {texContent}
    </Container>
  );
}
