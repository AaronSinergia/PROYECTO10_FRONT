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

  const apiUrlNewEvent = 'http://localhost:3000/api/events/';

  const response = await fetch(apiUrlNewEvent, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newEvent,
  });

  if (response.ok) {
    alert('El evento ha sido agregado exitosamente.');

    const newForm = document.querySelector('form');

    const newBtnGoBack = document.createElement('button');
    newBtnGoBack.innerHTML = 'Atrás';
    newBtnGoBack.className = 'back_btn';
    newBtnGoBack.addEventListener('click', () => {
      alert(
        'Por políticas de seguridad, y prevenir la inserción de eventos con bots, vamos a redirigirte para que vuelvas a loguearte.'
      );
      window.location.reload();
    });

    newForm.appendChild(newBtnGoBack);
  } else {
    alert(
      'Error al agregar el evento. Asegúrate de que el evento no exista previamente.'
    );
  }
};
