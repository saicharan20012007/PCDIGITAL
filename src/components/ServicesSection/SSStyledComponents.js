import styled from "styled-components";
import {FiChevronDown,FiChevronRight} from 'react-icons/fi'
import {MdInfoOutline} from "react-icons/md"
import {FiPlusCircle} from 'react-icons/fi'
import {IoBusinessSharp} from 'react-icons/io5';
import {IoGiftSharp} from 'react-icons/io5'
import {MdOutlineClass} from 'react-icons/md'
import {MdBusinessCenter} from 'react-icons/md'
import {IoRestaurantSharp} from 'react-icons/io5'
import {MdTravelExplore} from 'react-icons/md'
import {FaCcVisa} from 'react-icons/fa'
import {BiInfoCircle} from 'react-icons/bi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {FaGraduationCap,FaRegNewspaper} from 'react-icons/fa'
import {FaBookOpen} from 'react-icons/fa'
import {BsShop} from 'react-icons/bs'
import {LuArrowUpDown} from 'react-icons/lu'
import {BsBank2} from 'react-icons/bs'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {FaBlogger} from 'react-icons/fa'
import {GiVacuumCleaner} from 'react-icons/gi'
import {FaPlaneArrival} from 'react-icons/fa'
import {MdPlumbing} from 'react-icons/md'
import {HiOutlineDevicePhoneMobile} from 'react-icons/hi2'
import {SiTrustpilot} from 'react-icons/si'
import {GiTeacher} from 'react-icons/gi'
import {MdRealEstateAgent} from 'react-icons/md'
import {IoMdPhotos} from 'react-icons/io'
import {BiMoviePlay} from 'react-icons/bi'
import {MdSportsCricket} from 'react-icons/md'
import {MdAddHomeWork} from 'react-icons/md'
import {BiCameraMovie} from 'react-icons/bi'
import {BsBank} from 'react-icons/bs'
import {MdNightlife} from 'react-icons/md'
import {FiArrowUpRight} from 'react-icons/fi'
import {TbMovie} from 'react-icons/tb'
import {TbStethoscope} from 'react-icons/tb'
import {MdBookOnline} from 'react-icons/md'
import {FaMusic} from 'react-icons/fa'
import {RiCalendarEventFill} from 'react-icons/ri'
import {FaLaptopCode} from 'react-icons/fa'
import {GiProgression} from 'react-icons/gi'
import {MdOutlineElectricalServices} from 'react-icons/md'
import {GiGardeningShears} from 'react-icons/gi'
import {MdElectricBolt} from 'react-icons/md'
import {RiComputerLine} from 'react-icons/ri'
import {BsMortarboard} from 'react-icons/bs'
import {GiCommercialAirplane} from 'react-icons/gi'
import {TbSteeringWheel} from 'react-icons/tb'
import {AiTwotoneInsurance} from 'react-icons/ai'
import {MdOutlineAccountBox} from 'react-icons/md'


export const ServicesSectionContainer = styled.div`
display:flex;
flex-direction:row;
padding-left:100px;
padding-right:100px;
padding-top:10px;
flex-wrap:wrap;

` 

export const ItemsCard = styled.div`
`
export const MainCard = styled.div`
padding:10px;
padding-left:45px;
width:220px;
margin-right:20px;
margin-top:30px;
background-color:#235d88;
color:white;
display:flex;
border-top-left-radius:7px;
border-top-right-radius:7px;

align-items:center;
justify-content:space-between;`


export const ExpandedIcon = styled(FiChevronDown)`
`

export const CollapsedIcon = styled(FiChevronRight)`
`

export const SubItem1 = styled.div`
padding:10px;
margin-bottom:1px;
padding-left:15px;
width:250px;
background-color:#5292c1;
color:white;
display:flex;
align-items:center;
justify-content:space-between;

`

export const InfoIcon = styled(MdInfoOutline)`

color:white;
font-size:25px;
margin-left:7px;
margin-right:7px;`

export const PlusIcon = styled(FiPlusCircle)`
color:white;
font-size:25px;
margin-left:7px;
margin-right:7px;`

export const BusinessIcon1 = styled(IoBusinessSharp)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const GiftsAndOffers = styled(IoGiftSharp)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const InfoAdd = styled.div`
display:flex;
align-self:flex-end;
margin-left:auto;
width:90px;
justify-content:center;
align-items:center;
height:100%;`

export const BusinessIcon2 = styled(IoGiftSharp)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const BusinessIcon3 = styled(MdOutlineClass)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const InfoIcon1 = styled(BiInfoCircle)`
color:#006699;
font-size:25px;
margin-left:10px;
margin-right:10px;`

export const InfoIcon2 = styled(BiInfoCircle)`
color:#339933;
font-size:25px;
margin-left:10px;
margin-right:10px;`

export const InfoIcon3 = styled(BiInfoCircle)`
color: rgb(255, 153, 0);
font-size:25px;
margin-left:10px;
margin-right:10px;`

export const PlusIcon1 = styled(AiOutlinePlusCircle)`
color:#006699;
font-size:25px;
margin-left:10px;
margin-right:10px;`

export const PlusIcon2 = styled(AiOutlinePlusCircle)`
color:#339933;
font-size:25px;
margin-left:10px;
margin-right:10px;`

export const PlusIcon3 = styled(AiOutlinePlusCircle)`
color:rgb(255, 153, 0);
font-size:25px;
margin-left:10px;
margin-right:10px;`


export const BusinessIcon4 = styled(MdBusinessCenter)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const BusinessIcon5 = styled(IoRestaurantSharp)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const TravelIcon = styled(MdTravelExplore)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const VisaIcon = styled(FaCcVisa)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const ServicesContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;`

export const EducationIcon = styled(FaGraduationCap)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const StudyIcon = styled(FaBookOpen)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const AiToolIcon = styled(GiArtificialIntelligence)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const TrainingIcon = styled(GiTeacher)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`



export const BlogsIcon = styled(FaBlogger)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const PhotosVideosLogo = styled(IoMdPhotos)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const NewsIcon = styled(FaRegNewspaper)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

 
export const EntertainmentIcon = styled(BiMoviePlay)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const MoviesIcon = styled(BiCameraMovie)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const OTTIcon = styled(TbMovie)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const MusicIcon = styled(FaMusic)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const SportsIcon = styled(MdSportsCricket)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const HealthIcon = styled(TbStethoscope)`
font-size:20px;
margin-left:10px;
margin-right:10px;
color: white ;
`
export const StratupIcon = styled(GiProgression)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const CouncilIcon = styled(GiTeacher)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const TechnologyAndInnovationTitle = styled.h3`
color: #9900CC  ;
font-size:20px;
font-weight:400px;

 `

 export const SpiritualityLifestyleTitle = styled.h3`
color: white   ;
font-size:20px;
font-weight:400px;

 `

 export const TechIcon = styled(FaLaptopCode)`
 color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
 `

 export const SpiritualityIcon = styled(MdNightlife)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const UtilitiesTitle = styled.h3`
color: black ;
font-size:30px;
font-weight:400px;
margin-left:100px;
text-decoration:underline;
 `

 export const HomeIcon = styled(MdAddHomeWork)`
color:#00008B;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const RealestateIcon = styled(MdRealEstateAgent)`
color:#00008B;
font-size:20px;
margin-left:10px;
margin-right:10px;`



export const HousingTitle = styled.h3`
color: #00008B;
font-size:20px;
font-weight:400px;
 `
 export const HomeServiceTitle = styled.h3`
 color: #008000;
 font-size:20px;
 font-weight:400px;
  `
 export const CleanersIcon = styled(GiVacuumCleaner)`
 color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
 `
export const PlumberIcon = styled(MdPlumbing)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const ElecticianIcon = styled(MdOutlineElectricalServices)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const GardeningIcon = styled(GiGardeningShears)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const LinkIcon = styled(FiArrowUpRight)`
color:white;
font-size:20px;
`

export const ElectricityIcon = styled(MdElectricBolt)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const EventIcon = styled(RiCalendarEventFill)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const ChatityIcon = styled(SiTrustpilot)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const  MobileIcon= styled(HiOutlineDevicePhoneMobile)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const UACTitle = styled.h3`
color: #00FFFF;
font-size:20px;
font-weight:400px;
`

export const InternetIcon = styled(LuArrowUpDown)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const TVIcon  = styled(RiComputerLine)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const GALSTitle = styled.h3`
color:  #8B0000;
font-size:20px;
font-weight:400px;
`

export const GSTitle = styled.h3`
color:  #8B4513;
font-size:20px;
font-weight:400px;
` 

export const FlyPlaneIcon  = styled(GiCommercialAirplane)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const LandPlaneIcon  = styled(FaPlaneArrival)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const DrivingLisenseIcon  = styled(TbSteeringWheel)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const OnlineIcon = styled(MdBookOnline)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;


`

export const ECTitle = styled.h3`
color:  #800000;
font-size:20px;
font-weight:400px;
`

export const FBTitle = styled.h3`
color:  #800080;
font-size:20px;
font-weight:400px;
`

export const OfflineIcon = styled(BsShop)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const FinanceIcon = styled(BsBank)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`


export const BankIcon = styled(BsBank2)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const InsuranceIcon = styled(AiTwotoneInsurance)`
color:white;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const MortIcon = styled(BsMortarboard)`
color:#800080;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const AccountantIcon = styled(MdOutlineAccountBox)`
color:#800080;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const ADIMGC = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;`

export const TrendingTitle = styled.h2`
color:white;
margin:10px;
margin-top:45px;
text-decoration:underline;
`
export const TrendingDes = styled.p`
color:white;
margin:5px;
margin-top:20px;
margin-left:10px;`



export const LogoTitle = styled.h1`
margin-left:30px;
margin-right:30px;`