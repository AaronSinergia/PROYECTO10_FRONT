import { buttonsStyles } from '../../../utils/data/body/buttons/buttonCSS/buttonsStyles.js';
import './addNewEventBTN.css';
import newEventForm from './newEventForm/newEventForm.jsx';

const addNewEventBTN = () => {
  const newEventBtn = document.createElement('button');
  newEventBtn.className = 'new_event_btn';
  newEventBtn.innerHTML = 'AÑADIR NUEVO EVENTO';

  Object.assign(newEventBtn.style, buttonsStyles);

  newEventBtn.addEventListener('click', () => newEventForm());

  return newEventBtn;
};

export default addNewEventBTN;
