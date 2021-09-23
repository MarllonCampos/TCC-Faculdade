
import loadingIcon from '../../assets/loading.svg'
import loadingIconVerde from '../../assets/loading-verde.svg'
import { Container } from './styles'

const Loading = (props) => {
    return (
        <Container>
            <img src={`${props.verde ? loadingIconVerde : loadingIcon   }`}width='100px' alt="Carregando"/>

        </Container>
    )

}

export default Loading