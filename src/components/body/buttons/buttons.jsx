import { apiLoginUser } from '../../../api/apiLoginUser';
import registerClicked from '../../../components/body/registerClicked/registerClicked';
import { apiRegisterUser } from '../../../api/apiRegisterUser.js';
import returnToLogin from '../returnToLogin/returnToLogin.jsx';

import { buttonsStyles } from '../../../utils/data/body/buttons/buttonCSS/buttonsStyles';

const buttons = (buttonsArray) => {
  const divButton = document.createElement('div');
  divButton.className = 'div_btn';

  for (const buttons of buttonsArray) {
    const bodyButton = document.createElement('button');

    Object.assign(bodyButton.style, buttonsStyles);
    bodyButton.innerHTML = buttons.innerHTML;
    bodyButton.className = buttons.className;

    if (bodyButton.innerHTML === 'ACCEDER') {
      bodyButton.addEventListener('click', () => apiLoginUser());
    }

    if (bodyButton.innerHTML === 'REGISTRATE') {
      bodyButton.addEventListener('click', () => registerClicked());
    }

    if (bodyButton.innerHTML === 'CONFIRMA EL REGISTRO') {
      bodyButton.addEventListener('click', () => apiRegisterUser());
    }

    if (bodyButton.innerHTML === 'LOGUEATE CON TU USUARIO') {
      bodyButton.addEventListener('click', () => returnToLogin());
    }

    divButton.appendChild(bodyButton);
  }

  return divButton;
};

export default buttons;
