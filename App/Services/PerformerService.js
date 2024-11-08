import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';
async function Get_Performer_List() {
  let endpoint = 'get-hallfame';
  return HttpClient.get(endpoint);
}
async function Get_Performer_Single_Data(id) {
  console.log("fbdfbzxcbzdfnbDvbf", id)
  // let endpoint = 'get-others-profile/';
  return HttpClient.get('get-others-profile/' + id);
}
async function Get_Skill_Data(data) {
  return HttpClient.post('view-skill-rating', data);
}
async function Performer_Raiting(data) {

  // console.log("datadatadata----------------",data)
  return HttpClient.post('add-skill-rating', data);
}
const PerformerService = {
  Get_Performer_List,
  Get_Performer_Single_Data,
  Get_Skill_Data,
  Performer_Raiting

};

export default PerformerService;
