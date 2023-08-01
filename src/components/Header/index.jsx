import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles"

export function Header () {
  return (
    <Container to="/profile">
      <Profile to="/profile">
        <img src="https://github.com/luciana-maria.png" alt="foto do usuário" />
        <div>
          <span>Bem -vindo (a)</span>
          <strong>Luciana Santos</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}