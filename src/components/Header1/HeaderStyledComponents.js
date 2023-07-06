import styled from 'styled-components'
import {PiSignInBold} from 'react-icons/pi'
import {BsPersonAdd} from 'react-icons/bs'
import {FiChevronDown} from 'react-icons/fi'
export const Header1Container = styled.div`
height:40px;
background-color:#263c55;
display:flex;
align-items:center;
padding-left:20px;
padding-right:20px;
justify-content:space-between;
margin-bottom:30px;
`

export const Header1Text = styled.h3`
color:white;
margin:0px;
font-weight:400;
font-size:16px;
display:flex;
align-items:center;`

export const SigninIcon = styled(PiSignInBold)`
margin-left:20px;
align-self:center;
margin-right:5px;
height:20px;
width:20px;
`

export const Joinicon = styled(BsPersonAdd)`
margin-left:20px;
align-self:center;
margin-right:5px;
height:20px;
width:20px;
`

export const HeaderColumn1 = styled.div`
display:flex;
`

export const CountryBtn = styled.button`
background-color:white;
border-width:0px;
cursor:pointer;
padding-left:5px;
margin-left:5px;
border-left-top-radius:5px;
outline:none;
padding-right:10px;
border-left-top-radius:30px;
border-left-bottom-radius:30px;`

export const DownwardIcon = styled(FiChevronDown)`
`
export const SelectTag = styled.select`
border-width:0px;
width:100%;
outline:noney;`