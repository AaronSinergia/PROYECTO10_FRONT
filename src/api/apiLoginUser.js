import { API_URL } from '../config/API_URL';
import { apiShowAllEvents } from './apiShowAllEvents';

const waitForElements = async (selector) => {
  return new Promise((resolve) => {
    const checkElements = () => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        resolve(elements);
      } else {
        requestAnimationFrame(checkElements);
      }
    };

    checkElements();
  });
}; // Esto lo he sacado de CHAT GPT, tras buscar la forma de poner el elemento en display flex y no encontrarla

export const apiLoginUser = async () => {
  const username = document.querySelector('#usuario').value;
  const password = document.querySelector('#contraseña').value;

  const login_url = 'auth/login';
  const apiUrlLogin = API_URL + login_url;

  try {
    const dataLogin = await fetch(apiUrlLogin, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const dataRes = await dataLogin.json();
    localStorage.setItem('id', dataRes.assistant._id);
    localStorage.setItem('username', dataRes.assistant.username);

    console.log(dataRes);

    if (dataLogin.status === 400) {
      alert('El usuario o contraseña no existen');
    } else {
      alert(`Bienvenido ${username}`);
      apiShowAllEvents();

      if (dataRes.assistant.isAdmin == 'Yes' && dataLogin.status === 200) {
        alert('Te has logado con usuario ADMIN');
        console.log('Te has logado con usuario ADMIN');

        const targetElementInput = await waitForElements('.assistants_bbdd');

        for (const inputElement of targetElementInput) {
          inputElement.style.display = 'flex';
        }
      } else {
        const targetElementBTN = await waitForElements('.new_event_btn');
        targetElementBTN.remove();
      }
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};
