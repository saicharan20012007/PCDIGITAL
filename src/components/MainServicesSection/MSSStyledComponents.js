import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'

export const MSSBgContainer = styled.div`
padding:50px;
display:flex;
flex-direction:column;
align-items:center;`

export const TrendingSearchTitle = styled.h2`
color:#235d88;
text-align:center;
`
export const NewsStyling1 = styled.p`
background-color:#d9d9d9;
text-align:center;
width:700px;
margin:0px;
padding:5px;`
export const NewsStyling2 = styled.p`
color:#d9d9d9;
text-align:center;
width:700px;
margin:0px;
padding:5px;`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  height:50px;
  background-color:#dde5ec;
  justify-content:space-between;
  margin:30px;
  border-radius:30px;
  cursor:pointer;
`;


export const SearchInput = styled.input`
  border: none;
  outline: none;
  width:800px;
  font-size: 18px;
  background-color:#dde5ec;
  margin-left:5px;
`;

export const SearchIcon = styled(FaSearch)`
  color: #666;
  font-size: 30px;
  align-self:right;
  margin-right:15px;
`;

