//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/Home/Home';
import BottomTab from './BottomTab';
import Profile from '../Screens/Profile/Profile';
import Bulletin from '../Screens/Bulletin/Bulletin';
import TopPerformer from '../Screens/TopPerformer/TopPerformer';
import Employee from '../Screens/Employee/Employee';
import Event from '../Screens/Event/Event';
import RefferalHiring from '../Screens/RefferalHiring/RefferalHiring';
import JoinInitiatives from '../Screens/JoinInitiatives/JoinInitiatives';
import Training from '../Screens/Training/Training';
import AfinityGroups from '../Screens/AfinityGroups/AfinityGroups';
import Notification from '../Screens/Notification/Notification';
import Advocacy from '../Screens/Advocacy/Advocacy';
import AdvocacySingleScreen from '../Screens/Advocacy/AdvocacySingleScreen';
import RefferJob from '../Screens/RefferalHiring/RefferJob';
import JobNotififationPage from '../Screens/Notification/JobNotififationPage';
import TrainingAddPage from '../Screens/Training/TrainingAddPage';
import TrainingNextPage from '../Screens/Training/TrainingNextPage';
import TrainingVideoPage from '../Screens/Training/TrainingVideoPage';
import Document from '../Screens/Document/Document';
import DocumentAddPage from '../Screens/Document/DocumentAddPage';
import SingleDocumentScreen from '../Screens/Document/SingleDocumentScreen';
import CreateNewPost from '../Screens/Home/CreateNewPost';
import TrainingRequest from '../Screens/Training/TrainingRequest';
import JobRequest from '../Screens/Job/JobRequest';
import CreateEvent from '../Screens/Event/CreateEvent';
import EventSet from '../Screens/Event/EventSet';
import Onbording from '../Screens/Onbording/Onbording';
import Live from '../Screens/Live/Live';
import AfinityGroupAdd from '../Screens/AfinityGroups/AfinityGroupAdd';
// import NewSurvey30Day from '../Components/SurveyTopTab/NewSurvey30Day';
// import NewHireSurvey60 from '../Screens/Onbording/Toptab/NewHireSurvey60';
// import NewHireSurvey90Item from '../Components/OnbordingComponents/NewHireSurvey90Component/NewHireSurvey90Item';
// import NewHireSurvey90 from '../Screens/Onbording/Toptab/NewHireSurvey90';
// import EmployeeEngagement from '../Components/SurveyTopTab/EmployeeEngagement';
// import EmployeeNetPromoter from '../Components/SurveyTopTab/EmployeeNetPromoter';
// import BestWorkPlace from '../Components/SurveyTopTab/BestWorkPlace';
import AdvocayAdd from '../Screens/Advocacy/AdvocayAdd';
import InitiativeAdd from '../Screens/JoinInitiatives/InitiativeAdd';
import HobbiesViewAll from '../Screens/Profile/HobbiesViewAll';
import BioViewAll from '../Screens/Profile/BioViewAll';
import SkillViewAll from '../Screens/Profile/SkillViewAll';
import SaveViewAll from '../Screens/Profile/SaveViewAll';
import InitiativeSingleScreen from '../Screens/JoinInitiatives/InitiativeSingleScreen';
import JobForm from '../Screens/Job/JobForm';
import OtherProfile from '../Screens/OtherProfile/OtherProfile';
import ViewPdf from '../Screens/Advocacy/FileDownload/ViewPdf';
import ThankYouCard from '../Screens/ThankYouCard/ThankYouCard';
import ChatBox from '../Screens/Chat/ChatBox';
import CirtificateViewAll from '../Screens/Profile/CirtificateViewAll';
import ActivityViewAll from '../Screens/Profile/ActivityViewAll';
import Setting from '../Screens/Settings/Setting';
import Repost from '../Screens/Home/Repost';
import RewardPoint from '../Screens/RewardPoint/RewardPoint';
import BulletinSinglePage from '../Screens/Bulletin/BulletinSinglePage';
import OtherProfileNew from '../Screens/OtherProfile/OtherProfileNew';
import AfinityGroupSinglePage from '../Screens/AfinityGroups/AfinityGroupSinglePage';
import AfinityOtherSinglePage from '../Screens/AfinityGroups/AfinityOtherSinglePage';
import GroupDetailScreen from '../Screens/AfinityGroups/GroupDetailScreen';
import MemberList from '../Screens/AfinityGroups/MemberList';
import ClaimPoint from '../Screens/ClainPoint/ClaimPoint';
import AllTrainingNotification from '../Screens/Notification/AllTrainingNotification';
import AllTrainingNextNotify from '../Screens/Notification/AllTrainingNextNotify';
import CreateBulletin from '../Screens/Bulletin/CreateBulletin';
import searchHome from '../Screens/Home/SearchHome';
import AddPerForm from '../Screens/TopPerformer/AddPerForm';
import AddEmployee from '../Screens/Employee/AddEmployee';
import CirtificateImage from '../Components/Profile/Cirtificate/CirtificateImage';
import AnalyticsDashboard from '../Screens/Analytics/AnalyticsDashboard';
import AnalyticsViewDetails from '../Screens/Analytics/AnalyticsViewDetails';
import AnalyticsAdvocacyScreen from '../Screens/Analytics/AnalyticsAdvocacyScreen';
import MsgList from '../Screens/Chat/MsgList';
import EmployeeVoice from '../Components/DrawerComponent/AnalyticsDashboard/EmployeeVoice';
import EmployeeVoiceScreen from '../Screens/Analytics/EmployeeVoiceScreen';
import OrganiserChartList from '../Screens/OrganiserChart/OrganiserChartList';
import Manager from '../Screens/OrganiserChart/Manager';
import Hr from '../Screens/OrganiserChart/Hr';
import OngoingLearning from '../Screens/OngoingLearning/OngoingLearning';
import AddMentor from '../Screens/Mentor/AddMentor';
import Mentor from '../Screens/Mentor/Mentor';

const Stack = createStackNavigator();

const AppStack = () => {
  // const { login_status } = useSelector(state => state.User)
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Bulletin" component={Bulletin} />
      <Stack.Screen name="TopPerformer" component={TopPerformer} />
      <Stack.Screen name="Employee" component={Employee} />
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="RefferalHiring" component={RefferalHiring} />
      <Stack.Screen name="JoinInitiatives" component={JoinInitiatives} />
      <Stack.Screen name="ThankYouCard" component={ThankYouCard} />
      <Stack.Screen name="Training" component={Training} />
      <Stack.Screen name="Advocacy" component={Advocacy} />
      <Stack.Screen name="AdvocacySingleScreen" component={AdvocacySingleScreen} />
      <Stack.Screen name="AfinityGroups" component={AfinityGroups} />
      <Stack.Screen name="Document" component={Document} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="RefferJob" component={RefferJob} />
      <Stack.Screen name="JobNotififationPage" component={JobNotififationPage} />
      <Stack.Screen name="TrainingAddPage" component={TrainingAddPage} />
      <Stack.Screen name="TrainingNextPage" component={TrainingNextPage} />
      <Stack.Screen name="TrainingVideoPage" component={TrainingVideoPage} />
      <Stack.Screen name="DocumentAddPage" component={DocumentAddPage} />
      <Stack.Screen name="SingleDocumentScreen" component={SingleDocumentScreen} />
      <Stack.Screen name="CreateNewPost" component={CreateNewPost} />
      <Stack.Screen name="TrainingRequest" component={TrainingRequest} />
      <Stack.Screen name="JobRequest" component={JobRequest} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
      <Stack.Screen name="EventSet" component={EventSet} />
      <Stack.Screen name="Onbording" component={Onbording} />
      <Stack.Screen name="Live" component={Live} />
      <Stack.Screen name="AfinityGroupAdd" component={AfinityGroupAdd} />
      <Stack.Screen name="AfinityGroupSinglePage" component={AfinityGroupSinglePage} />
      <Stack.Screen name="GroupDetailScreen" component={GroupDetailScreen} />
      <Stack.Screen name="AfinityOtherSinglePage" component={AfinityOtherSinglePage} />
      <Stack.Screen name="MemberList" component={MemberList} />

      <Stack.Screen name="AdvocayAdd" component={AdvocayAdd} />
      <Stack.Screen name="InitiativeAdd" component={InitiativeAdd} />
      <Stack.Screen name="HobbiesViewAll" component={HobbiesViewAll} />
      <Stack.Screen name="BioViewAll" component={BioViewAll} />
      <Stack.Screen name="SkillViewAll" component={SkillViewAll} />
      <Stack.Screen name="SaveViewAll" component={SaveViewAll} />
      <Stack.Screen name="InitiativeSingleScreen" component={InitiativeSingleScreen} />
      <Stack.Screen name="JobForm" component={JobForm} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
      <Stack.Screen name="OtherProfileNew" component={OtherProfileNew} />
      <Stack.Screen name="ViewPdf" component={ViewPdf} />
      <Stack.Screen name="ChatBox" component={ChatBox} />
      <Stack.Screen name="CirtificateViewAll" component={CirtificateViewAll} />
      <Stack.Screen name="ActivityViewAll" component={ActivityViewAll} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Repost" component={Repost} />
      <Stack.Screen name="RewardPoint" component={RewardPoint} />
      <Stack.Screen name="BulletinSinglePage" component={BulletinSinglePage} />
      <Stack.Screen name="CreateBulletin" component={CreateBulletin} />
      <Stack.Screen name="ClaimPoint" component={ClaimPoint} />
      <Stack.Screen name="AllTrainingNotification" component={AllTrainingNotification} />
      <Stack.Screen name="AllTrainingNextNotify" component={AllTrainingNextNotify} />
      {/* <Stack.Screen name="SearchHome" component={SearchHome} /> */}
      <Stack.Screen name="MsgList" component={MsgList} />
      <Stack.Screen name="searchHome" component={searchHome} />
      <Stack.Screen name="AddPerForm" component={AddPerForm} />
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
      <Stack.Screen name="CirtificateImage" component={CirtificateImage} />
      <Stack.Screen name="AnalyticsDashboard" component={AnalyticsDashboard} />
      <Stack.Screen name="AnalyticsViewDetails" component={AnalyticsViewDetails} />
      <Stack.Screen name="AnalyticsAdvocacyScreen" component={AnalyticsAdvocacyScreen} />
      <Stack.Screen name="EmployeeVoiceScreen" component={EmployeeVoiceScreen} />
      <Stack.Screen name="OrganiserChartList" component={OrganiserChartList} />
      <Stack.Screen name="Manager" component={Manager} />
      <Stack.Screen name="Hr" component={Hr} />
      <Stack.Screen name="OngoingLearning" component={OngoingLearning} />
      <Stack.Screen name="AddMentor" component={AddMentor} />
      <Stack.Screen name="Mentor" component={Mentor} />


      {/* <Stack.Screen name="New Hire Survey: 30-Day Check-In" component={NewSurvey30Day} />
      <Stack.Screen name="New Hire Survey: 60-Day Check-In" component={NewHireSurvey60} />
      <Stack.Screen name="New Hire Survey: 90-Day Check-In" component={NewHireSurvey90} />
      <Stack.Screen name="Employee Engagement Survey" component={EmployeeEngagement} />
      <Stack.Screen name="Employee Net Promoter Score (ENPS) Survey" component={EmployeeNetPromoter} />
      <Stack.Screen name="Best Work Place Certification Certificate" component={BestWorkPlace} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
