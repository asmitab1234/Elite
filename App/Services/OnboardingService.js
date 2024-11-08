import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';
async function Get_Survey_Data() {
  let endpoint = 'view-checklist-day';
  return HttpClient.get(endpoint);
}
async function Get_New_Hire_Survey_30_Data(data) {
  return HttpClient.post('get-checklist', data);
}
async function StarSubmitOnbord(data) {
  let endpoint = 'add-survey-rating';
  return HttpClient.post(endpoint, data);
}
async function CommentAddOnbord(data) {
  let endpoint = 'add-question';
  return HttpClient.post(endpoint, data);
}
async function CommentGetOnbord() {
  let endpoint = 'view-checklist-question';
  return HttpClient.get(endpoint);
}
async function Get_Banner_Data() {
  let endpoint = 'get-profile';
  return HttpClient.get(endpoint);
}
async function Thoughts_Post_API(data) {
  let endpoint = 'add-share-thought';
  return HttpClient.post(endpoint, data);
}
const OnboardingService = {
  Get_Survey_Data,
  Get_New_Hire_Survey_30_Data,
  StarSubmitOnbord,
  CommentAddOnbord,
  CommentGetOnbord,
  Get_Banner_Data,
  Thoughts_Post_API
};

export default OnboardingService;
