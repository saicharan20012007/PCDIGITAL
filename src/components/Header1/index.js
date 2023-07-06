import {Header1Container,Header1Text,DownwardIcon,SelectTag,HeaderColumn1,Joinicon,SigninIcon,CountryBtn} from './HeaderStyledComponents'

const Header1 = () => (
    <Header1Container>
    <HeaderColumn1>
    <Header1Text>Welcome User!</Header1Text>
    <Header1Text> <SigninIcon/> Sigin In</Header1Text>
    <Header1Text> <Joinicon/>Join Free</Header1Text>
    </HeaderColumn1>

    <HeaderColumn1>
    <Header1Text>Support: +44 7867090363 </Header1Text>

    </HeaderColumn1>

    <HeaderColumn1>

    <CountryBtn>UK <DownwardIcon/></CountryBtn>
    <CountryBtn>London <DownwardIcon/></CountryBtn>

    <CountryBtn><SelectTag>
        <option value="English">English</option>
    </SelectTag> </CountryBtn>

    </HeaderColumn1>


    </Header1Container>
)

export default Header1