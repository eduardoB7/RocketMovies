import { Container, Tag } from "./style";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export function Card({ title, content, tag1, tag2, tag3 }) {
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
      <div className="tags">
        <Tag>{tag1}</Tag>
        <Tag>{tag2}</Tag>
        <Tag>{tag3}</Tag>
      </div>
    </Container>
  );
}
