import { fetchFunction } from '../functions/fetchFunction';

export const apiAttendance = async (ev) => {
  try {
    const checkChecked = ev.target.checked;

    if (checkChecked) {
      const userID = localStorage.getItem('id');
      const checkboxClassName = ev.target.className;

      let checkedData = JSON.parse(localStorage.getItem('checked_data')) || [];
      const eventChecked = { id: userID, evChecked: ev.target.className };
      checkedData.push(eventChecked);
      localStorage.setItem('checked_data', JSON.stringify(checkedData));

      const response = await fetchFunction({
        endpoint: `events/newAssistant/${checkboxClassName}`,
        method: 'PUT',
        body: JSON.stringify({
          assistants: userID,
        }),
      });

      if (response.status === 200) {
        console.log('Asistente agregado correctamente');
      } else {
        console.error('Error al agregar asistente');
        alert('El usuario ya está como asistente al evento');
      }
    }
  } catch (error) {
    console.error('Error en la función apiAttendance:', error);
  }
};

export default apiAttendance;
