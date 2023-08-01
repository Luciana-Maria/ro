import { Container } from './styles';

export function Button({title, loading =false, ...rest }){
  return (
    <Container type="button" 
    disable={loading} 
    {...rest}/*significa que tem outras propriedades */
    >

      {loading ? "carregando..." : title}
    </Container>
  )
}