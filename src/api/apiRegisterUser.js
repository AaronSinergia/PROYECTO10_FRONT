import { API_URL } from '../config/API_URL';
import { apiShowAllEvents } from './apiShowAllEvents';

export const apiRegisterUser = async () => {
  const username = document.querySelector('#usuario').value;
  const password = document.querySelector('#contraseña').value;

  const register_url = 'auth/register';

  const apiUrlRegister = API_URL + register_url;

  const dataRegister = await fetch(apiUrlRegister, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const dataRes = await dataRegister.json();
  localStorage.setItem('user', JSON.stringify(dataRes));

  if (dataRegister.status === 400) {
    alert(
      'Ya se ha registraso un usuario con ese nombre o el usuario/contraseña no han sido especificados.'
    );
  } else {
    alert(`Bienvenido ${username}`);
    apiShowAllEvents();
  }
};
