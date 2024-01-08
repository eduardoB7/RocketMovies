import { Container, FormProfile, Avatar } from "./style";

import { GoArrowLeft } from "react-icons/go";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText icon={GoArrowLeft} texContent={"Voltar"} />
      </header>
      <FormProfile>
        <Avatar>
          <img src="https://www.github.com/eduardoB7.png" alt="" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input icon={FiUser} placeholder={"Nome"} required />
        <Input icon={FiMail} placeholder={"Email"} type={"email"} required />
      </FormProfile>
    </Container>
  );
}
