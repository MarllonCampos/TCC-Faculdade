import loadingIcon from '../../assets/loading.svg'
import loadingIconVerde from '../../assets/loading-verde.svg'
import { Container } from './styles'

const Loading = props => {
  return (
    <Container>
      {props.verde ? (
        <img src={loadingIconVerde} width="100px" />
      ) : (
        <img src={loadingIcon} width="100px" />
      )}
    </Container>
  )
}

export default Loading
