import { API_URL } from '../config/API_URL';
import { fetchFunction } from '../functions/fetchFunction';

export const apiShowAllEvents = () => {
  const events_url = 'events';

  const apiUrlGET = API_URL + events_url;

  fetchFunction(apiUrlGET);
};

window.addEventListener('load', function (ev) {
  const userID = localStorage.getItem('id');
  if (userID) {
    apiShowAllEvents();

    console.log(
      '¡El ID está presente en el localStorage al recargar la página!'
    );
  }
});
