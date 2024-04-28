import apiAttendance from '../../../api/apiAttendance.js';
import addNewEventBTN from '../addNewEvent/addNewEventBTN.jsx';
import './loggedEventPage.css';

const loggedEventPage = (events) => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const h1 = document.querySelector('h1');
  h1.innerHTML = 'VOLVER A HOME';

  h1.addEventListener('click', () => {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    h1.innerHTML = 'RESURRECTION EVENT MANAGER';
  });

  const h2 = document.querySelector('.h2');
  h2.remove();

  const btnAddNewEvent = addNewEventBTN();

  const gridEvents = document.createElement('div');
  gridEvents.className = 'grid_div';

  const localStorageUSERNAME = localStorage.getItem('username');

  for (const data of events.response) {
    const eventSection = document.createElement('section');
    eventSection.className = 'event_section';

    const img = document.createElement('img');
    img.className = 'img_bbdd';
    img.src = data.img;
    img.alt = data.title;

    const title = document.createElement('h3');
    title.className = 'title_bbdd';
    title.innerHTML = data.title;

    const date = document.createElement('h3');
    date.className = 'date_bbdd';
    date.innerHTML = data.date;

    const location = document.createElement('h3');
    location.className = 'location_bbdd';
    location.innerHTML = data.location;

    const description = document.createElement('h3');
    description.className = 'description_bbdd';
    description.innerHTML = data.description;

    const assistants = document.createElement('select');
    assistants.className = 'assistants_bbdd';

    for (const key in data.assistants) {
      const element = data.assistants[key];

      const opt = document.createElement('option');
      opt.innerHTML = element.username;

      assistants.appendChild(opt);
    }

    const confirmAssistantBox = document.createElement('div');
    confirmAssistantBox.className = 'confirm_box';

    const confirmAssistantText = document.createElement('h3');
    confirmAssistantText.className = 'confirm_text';
    confirmAssistantText.innerHTML = 'Marca si asistes:';

    const confirmAssistant = document.createElement('input');
    confirmAssistant.type = 'checkbox';
    confirmAssistant.className = data._id;

    for (const list of assistants) {
      if (localStorageUSERNAME === list.value) {
        confirmAssistant.style.display = 'none';
        confirmAssistantText.innerText = 'ASISTIRÁS A ESTE EVENTO';
        confirmAssistantText.style.color = 'red';
      }
    }

    confirmAssistant.addEventListener('click', (ev) => {
      apiAttendance(ev);

      confirmAssistant.remove();
      confirmAssistantText.innerText = 'ASISTIRÁS A ESTE EVENTO';
      confirmAssistantText.style.color = 'red';
    });

    eventSection.appendChild(assistants);

    confirmAssistantBox.appendChild(confirmAssistantText);
    confirmAssistantBox.appendChild(confirmAssistant);
    eventSection.appendChild(confirmAssistantBox);

    eventSection.appendChild(img);
    eventSection.appendChild(title);
    eventSection.appendChild(date);
    eventSection.appendChild(location);
    eventSection.appendChild(description);
    gridEvents.appendChild(eventSection);
  }

  main.appendChild(btnAddNewEvent);
  main.appendChild(gridEvents);
};

export default loggedEventPage;
