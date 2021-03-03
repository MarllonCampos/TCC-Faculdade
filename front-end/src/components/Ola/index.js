import { Container, HouseImage,Text } from './styles'

import HouseImg from '../../assets/house-img.svg'

const OlaLogo = ({text, ...props}) => {
    return (
        <Container>
            <HouseImage src={HouseImg} />
            <Text>{text ? {text} : 'Olâ,'}</Text>
        </Container>
    )
}


export default OlaLogo;