import axios from 'axios';

class PageDal{

getPage() {
return axios.get('/api/GetPage/Get/20'); 
}
}


export default PageDal;

