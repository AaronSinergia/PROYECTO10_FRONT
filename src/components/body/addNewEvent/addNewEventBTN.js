import './addNewEventBTN.css';
import newEventForm from './newEventForm/newEventForm';

const addNewEventBTN = () => {
  const newEventBtn = document.createElement('button');
  newEventBtn.className = 'new_event_btn';
  newEventBtn.innerHTML = 'AÑADIR NUEVO EVENTO';

  newEventBtn.addEventListener('click', () => newEventForm());

  return newEventBtn;
};

export default addNewEventBTN;
