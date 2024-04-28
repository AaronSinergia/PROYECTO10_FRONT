import { fetchFunction } from '../functions/fetchFunction';
import { apiShowAllEvents } from './apiShowAllEvents';

export const apiRegisterUser = async () => {
  const username = document.querySelector('#usuario').value;
  const password = document.querySelector('#contraseña').value;

  const response = await fetchFunction({
    endpoint: 'auth/register',
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  localStorage.setItem('user', JSON.stringify(response));

  if (response.status === 400) {
    alert(
      'Ya se ha registrado un usuario con ese nombre o el usuario/contraseña no han sido especificados.'
    );
  } else {
    alert(`Bienvenido ${username}`);
    apiShowAllEvents();
  }
};
