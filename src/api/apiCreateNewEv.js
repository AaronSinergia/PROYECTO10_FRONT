import { fetchFunction } from '../functions/fetchFunction';

export const apiCreateNewEv = async (ev) => {
  ev.preventDefault();

  const sendNewEvent = {
    img: ev.srcElement.form[0].value,
    title: ev.srcElement.form[1].value,
    date: ev.srcElement.form[2].value,
    location: ev.srcElement.form[3].value,
    description: ev.srcElement.form[4].value,
  };

  const newEvent = JSON.stringify(sendNewEvent);

  const response = await fetchFunction({
    endpoint: 'events/',
    method: 'POST',
    body: newEvent,
  });

  console.log(response.status);

  if (response.status === 201) {
    alert('El evento ha sido agregado exitosamente.');

    const newForm = document.querySelector('form');

    const newBtnGoBack = document.createElement('button');
    newBtnGoBack.innerHTML = 'Atrás';
    newBtnGoBack.className = 'back_btn';
    newBtnGoBack.addEventListener('click', () => {
      const h1 = document.querySelector('h1');

      localStorage.removeItem('id');
      localStorage.removeItem('username');
      h1.innerHTML = 'RESURRECTION EVENT MANAGER';
    });

    newForm.appendChild(newBtnGoBack);
  } else {
    alert(
      'Error al agregar el evento. Asegúrate de que el evento no exista previamente.'
    );
  }
};
