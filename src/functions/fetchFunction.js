import loggedEventPage from '../components/body/logedEventPage/loggedEventPage';

export const fetchFunction = (apiUrl) => {
  fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('The query is not valid');
      }
      return res.json();
    })
    .then((data) => {
      loggedEventPage(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert(
        'ERROR: Estamos experimentando problemas en la navegación al sistema interno. Estamos tratando de solucionarlo, prueba más tarde por favor...'
      );
    });
};
