import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';

const Add_Event = async (data) => {
    return HttpClient.post('add-event', data);
};
const Get_Event_Type = async () => {
    return HttpClient.get('fetch-event-type');
};
const Get_Afinity_Group = async () => {
    return HttpClient.get('view-my-affinity-group');
};
const Get_Invitation = async () => {
    return HttpClient.get('view-all-employees');
};
const Get_Event = async () => {
    return HttpClient.get('view-event');
};
const EventService = {
    Add_Event,
    Get_Event_Type,
    Get_Afinity_Group,
    Get_Invitation,
    Get_Event
};

export default EventService;
