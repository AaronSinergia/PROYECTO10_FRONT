import { fetchFunction } from '../functions/fetchFunction';
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

  const response = await fetchFunction({
    endpoint: 'auth/login',
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  localStorage.setItem('id', response.response.assistant._id);
  localStorage.setItem('username', response.response.assistant.username);

  if (response.response.status === 200) {
    alert('El usuario o contraseña no existen');
  } else {
    alert(`Bienvenido ${username}`);
    apiShowAllEvents();

    if (
      response.response.assistant.isAdmin == 'Yes' &&
      response.status === 200
    ) {
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
};
