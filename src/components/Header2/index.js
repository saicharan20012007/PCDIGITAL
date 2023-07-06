import {Header2Container,PCLOGO,WeatherBackground,Header2Location} from './Header2StyledComponents';
import { DownwardIcon,Header1Text } from '../Header1/HeaderStyledComponents';
const Header2 = () => (
    <Header2Container>
    <PCLOGO src="https://res.cloudinary.com/dlovqnrza/image/upload/v1688583357/PC_Digital_Logo_oxlgxq.png" alt="sample"/>  
    <WeatherBackground>
        <Header2Location>Location <DownwardIcon/></Header2Location>
        <Header1Text>Monday, +25* C</Header1Text>
    </WeatherBackground>
    </Header2Container>
)

export default Header2