import './newEventForm.css';
import { apiCreateNewEv } from '../../../../api/apiCreateNewEv';

const newEventForm = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const newForm = document.createElement('form');

  newForm.innerHTML = `
  <h2 class="new_event_title">NUEVO EVENTO</h2>
  <form action="/upload" method="post" enctype="multipart/form-data">

  <label for="archivo">Sube una Imagen:</label>

  <input type="text" name="archivo" id="archivo" accept=".jpg, .jpeg, .png, .gif">

  <label for="titulo">Título del Evento:</label>

  <input type="text" name="titulo" id="titulo" required>

  <label for="fecha">Fecha:</label>

  <input type="date" name="fecha" id="fecha" required>

   <label for="lugar">Lugar del Evento:</label>

  <input type="text" name="lugar" id="lugar" required>

  <label for="descripcion">Descripción del Evento:</label>
  

  <textarea name="descripcion" id="descripcion" rows="4" required></textarea>


</form>
    `;

  const btnForm = document.createElement('button');
  btnForm.className = 'submit';
  btnForm.innerHTML = 'AÑADIR NUEVO EVENTO';

  btnForm.addEventListener('click', apiCreateNewEv);

  newForm.appendChild(btnForm);
  main.appendChild(newForm);
};

export default newEventForm;
