import axios from 'axios';

class Datacontext {

  getPage(id) {
    if (!id)
      id = this.resolvePageIdIneditMode();
    if(!id)
      id= 6
    



    return axios.get('/api/Page/Get/' + id);
  }


  getMenu() {
    return axios.get('/api/Menu/Get/');
  }

  resolvePageIdIneditMode() {


    let hashArr = window.location.pathname.split(',,');

    let pageNr = hashArr[hashArr.length - 1].replace('/', '');

    let hasDash = pageNr.indexOf('_');

    if (hasDash > 0) {
      pageNr = pageNr.substr(0, hasDash);
    }
    return pageNr;
  }
}


export default Datacontext;

