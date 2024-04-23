import { fetchFunction } from '../functions/fetchFunction';

export const apiShowAllEvents = () => {
  const apiUrlGET = 'http://localhost:3000/api/events';

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
