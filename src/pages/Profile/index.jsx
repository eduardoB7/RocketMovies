import { Container, FormProfile, Avatar } from "./style";

import { GoArrowLeft } from "react-icons/go";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to={"/"}>
          <ButtonText icon={GoArrowLeft} texContent={"Voltar"} />
        </Link>
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
        <Input icon={FiLock} placeholder={"Senha"} type={"password"} required />
        <Input
          icon={FiLock}
          placeholder={"Nova senha"}
          type={"password"}
          required
        />
        <Button texContent={"Salvar"} />
      </FormProfile>
    </Container>
  );
}
