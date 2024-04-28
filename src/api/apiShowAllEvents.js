import { fetchFunction } from '../functions/fetchFunction';
import loggedEventPage from '../components/body/logedEventPage/loggedEventPage';

export const apiShowAllEvents = async () => {
  const response = await fetchFunction({ endpoint: 'events' });
  loggedEventPage(response);

  console.log(response);
};

window.addEventListener('load', function () {
  const userID = localStorage.getItem('id');
  if (userID) {
    apiShowAllEvents();
    console.log(
      '¡El ID está presente en el localStorage al recargar la página!'
    );
  }
});
