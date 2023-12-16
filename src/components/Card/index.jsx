import { Container } from "./style";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export function Card({ title, content }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="avaible">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
      <span>{content}</span>
    </Container>
  );
}
