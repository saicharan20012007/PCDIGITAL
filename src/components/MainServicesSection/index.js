import {MSSBgContainer,TrendingSearchTitle,SearchContainer,NewsStyling1,NewsStyling2,SearchInput,SearchIcon} from './MSSStyledComponents';

const MainServicesSection = () => (
    <MSSBgContainer>
    <TrendingSearchTitle>TRENDING SEARCH</TrendingSearchTitle>
    <NewsStyling1> Global Leaders Gather For Climate Change Summit</NewsStyling1>
    <NewsStyling2>New Study Reveals Alarming Declane in Bee Population</NewsStyling2>
    <SearchContainer>
        <SearchInput type="text" placeholder="Search..." />
        <SearchIcon />
      </SearchContainer>
  </MSSBgContainer>

)

export default MainServicesSection