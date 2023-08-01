import { Container, Form, Background } from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiMail,FiLock, FiUser } from 'react-icons/fi';
import { Link } from "react-router-dom";

export  function SignUp (){
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input placelolder="Nome" type="text" icon={FiUser} />
        <Input placelolder="email" type="text" icon={FiMail} />
        <Input placelolder="senha" type="password" icon={FiLock} />
        <Button title="Cadastrar" />
        <Link to="/">
          Voltar para o login
        </Link>
      </Form>
    </Container>
  )
}