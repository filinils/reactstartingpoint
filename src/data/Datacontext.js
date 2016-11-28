import axios from 'axios';

class Datacontext{

getPage() {

    let hashArr = window.location.pathname.split(',,');

    let pageNr = hashArr[hashArr.length-1].replace('/','');

    let hasDash = pageNr.indexOf('_');

    if(hasDash>0){
      pageNr = pageNr.substr(0,hasDash);
    }

   
return axios.get('/api/Page/Get/'+pageNr); 
}


getMenu() {
return axios.get('/api/Menu/Get/'); 
}
}


export default Datacontext;

