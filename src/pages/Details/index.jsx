
 import { Container, Links, Content} from './styles';/* pega da pasta styles*/
 import { Button } from '../../components/Button'; 
 import { ButtonText } from '../../components/ButtonText'; 
 import { Header } from '../../components/Header'; 
 import { Section } from '../../components/Section'; 
 import { Tag } from '../../components/Tag'; 
 

 export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis
             mollitia vitae sed et sapiente quod sit dolor, atque ex iste deleniti? 
             Vitae voluptate animi amet ipsam cumque alias laborum?</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://github.com/Luciana-Maria</a></li>
              <li><a href="#">https://github.com/Luciana-Maria</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}