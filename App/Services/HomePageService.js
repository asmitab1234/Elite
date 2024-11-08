import HttpClient from '../Utils/HttpClient';
import Storage from '../Utils/Storage';



const Home_Post_view = async (data) => {
  return HttpClient.post('view-all-post', data);
};

const HomePageService = {
  Home_Post_view,
};

export default HomePageService;
