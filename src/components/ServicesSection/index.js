import React, { useState } from 'react';
import { ServicesSectionContainer, BusinessIcon1,ChatityIcon,BusinessIcon2,BusinessIcon3,BusinessIcon4, BusinessIcon5,ItemsCard,InfoAdd, MainCard,ExpandedIcon,CollapsedIcon,SubItem1 , InfoIcon, PlusIcon, TravelIcon, VisaIcon, EducationIcon, StudyIcon, AiToolIcon, TrainingIcon, BlogsIcon, NewsIcon, PhotosVideosLogo, EntertainmentIcon, MoviesIcon, OTTIcon, MusicIcon, SportsIcon, HealthIcon, StratupIcon, TechIcon, SpiritualityIcon, CleanersIcon, PlumberIcon, ElecticianIcon, GardeningIcon, MobileIcon, InternetIcon, TVIcon, CouncilIcon, FlyPlaneIcon, LandPlaneIcon, DrivingLisenseIcon, OfflineIcon, FinanceIcon, BankIcon, InsuranceIcon, OnlineIcon, EventIcon} from './SSStyledComponents';

const ServicesSection = () => {
  const [isExpandedA, setIsExpandedA] = useState(false);
  const [isExpandedB, setIsExpandedB] = useState(false);
  const [isExpandedC, setIsExpandedC] = useState(false);
  const [isExpandedD, setIsExpandedD] = useState(false);
  const [isExpandedE, setIsExpandedE] = useState(false);
  const [isExpandedF, setIsExpandedF] = useState(false);
  const [isExpandedG, setIsExpandedG] = useState(false);
  const [isExpandedH, setIsExpandedH] = useState(false);
  const [isExpandedI, setIsExpandedI] = useState(false);
  const [isExpandedJ, setIsExpandedJ] = useState(false);
  const [isExpandedK, setIsExpandedK] = useState(false);
  const [isExpandedL, setIsExpandedL] = useState(false);
  const [isExpandedM, setIsExpandedM] = useState(false);





  const handleCardClickA = () => {
    setIsExpandedA(!isExpandedA);
  };
  const handleCardClickB = () => {
    setIsExpandedB(!isExpandedB);
  };

  const handleCardClickC = () => {
    setIsExpandedC(!isExpandedC);
  };

  const handleCardClickD = () => {
    setIsExpandedD(!isExpandedD);
  };

  const handleCardClickE = () => {
    setIsExpandedE(!isExpandedE);
  };

  const handleCardClickF = () => {
    setIsExpandedF(!isExpandedF);
  };

  const handleCardClickG = () => {
    setIsExpandedG(!isExpandedG);
  };
  const handleCardClickH = () => {
    setIsExpandedH(!isExpandedH);
  };
  const handleCardClickI = () => {
    setIsExpandedI(!isExpandedI);
  };

  const handleCardClickJ = () => {
    setIsExpandedJ(!isExpandedJ);
  };

  const handleCardClickK = () => {
    setIsExpandedK(!isExpandedK);
  };

  const handleCardClickL = () => {
    setIsExpandedL(!isExpandedL);
  };

  const handleCardClickM = () => {
    setIsExpandedM(!isExpandedM);
  };

  return (
    <ServicesSectionContainer>
      <ItemsCard>
        <MainCard onClick={handleCardClickA}>
          Business & Services {isExpandedA ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedA && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <BusinessIcon1/> Business Listing <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <BusinessIcon2/> Offers/gifts <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <BusinessIcon3/> Classifieds <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <BusinessIcon4/> Jobs Info <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <BusinessIcon1/> SMBS <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <BusinessIcon5/> Restaurants <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickB}>
      Information & Education {isExpandedB ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedB && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <TravelIcon/> Travel <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <VisaIcon/> Visa Info <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <EducationIcon/> Education Info <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <StudyIcon/> Learning Tools <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <AiToolIcon/> AI Tools <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <TrainingIcon/> Trainings <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickC}>
      Media & Entertainment {isExpandedC ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedC && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <BlogsIcon/> Blogs <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <PhotosVideosLogo/> Stock Photos & Videos<InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <NewsIcon/> News <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <EntertainmentIcon/> Entertainment <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <MoviesIcon/> Movies <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <OTTIcon/> OTT <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <MusicIcon/> Music <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <SportsIcon/> Sports <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>

      <ItemsCard>
      <MainCard onClick={handleCardClickD}>
      Health & Wellness {isExpandedD ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedD && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <HealthIcon/> Health and Wellness <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickE}>
      Technology & Innovation {isExpandedE ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedE && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <StratupIcon/> Startup <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <TechIcon/> Tech <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickF}>
      Spirituality and Lifestyle {isExpandedF ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedF && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <SpiritualityIcon/> Spirituality <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickG}>
      Home Services {isExpandedG ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedG && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <CleanersIcon/> Cleaners <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <PlumberIcon/> Plumbers<InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <ElecticianIcon/> Electricians <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <GardeningIcon/> Gardeners <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickH}>
      Utilities & Communication
 {isExpandedH ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedH && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <ElecticianIcon/> Electricity <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <MobileIcon/> Mobile<InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <InternetIcon/> Internet <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <TVIcon/> TV <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickI}>
      Government Services
 {isExpandedI ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedI && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <CouncilIcon/> Council Services <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <FlyPlaneIcon/> Traveling to India<InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <LandPlaneIcon/> Traveling from India <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <DrivingLisenseIcon/> Driver's License (DL)<InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>

      <ItemsCard>
      <MainCard onClick={handleCardClickJ}>
      Housing Services
 {isExpandedJ ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedJ && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <CouncilIcon/> Tolet (Rental Properties) <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <FlyPlaneIcon/> Brokers  (Real Estate Agents)<InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickK}>
      Indian Grocery Stores
 {isExpandedK ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedK && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <OnlineIcon/> Online  <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <OfflineIcon/> Offline  (Physical Stores)<InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickL}>
      Events Charities
 {isExpandedL ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedL && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <EventIcon/> Events  <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <ChatityIcon/> Charities <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
          </div>
        )}
      </ItemsCard>
      <ItemsCard>
      <MainCard onClick={handleCardClickM}>
      Finance & Banking
 {isExpandedM ? <ExpandedIcon /> : <CollapsedIcon />}
        </MainCard>
        {isExpandedM && (
          <div>
            {/* Render sub-items here */}
            <SubItem1 > <FinanceIcon/> Finance And Banking  <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <BankIcon/> Bank Account <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>
            <SubItem1 > <InsuranceIcon/> Insurance <InfoAdd><InfoIcon/> <PlusIcon/></InfoAdd></SubItem1>

          </div>
        )}
      </ItemsCard>
    </ServicesSectionContainer>
  );
};

export default ServicesSection;
