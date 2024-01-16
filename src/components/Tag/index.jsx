import { Container } from "./style";

import { FiPlus, FiX } from "react-icons/fi";

export function Tag({ isNew = false, onClick, value, ...res }) {
  return (
    <Container $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...res} />

      <button onClick={onClick} type="button">
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
