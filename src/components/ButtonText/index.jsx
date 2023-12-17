import { Container } from "./style";

export function ButtonText({ texContent, icon: Icon }) {
  return (
    <Container>
      {Icon && <Icon size={16} />}
      {texContent}
    </Container>
  );
}
