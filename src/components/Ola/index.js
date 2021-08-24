import { Container, HouseImage,Text } from './styles'

import HouseImg from '../../assets/house-img.svg'

const OlaLogo = ({text, ...props}) => {

    return (
        <Container>
            <HouseImage src={HouseImg} {...props}/>
        </Container>
    )
}


export default OlaLogo;