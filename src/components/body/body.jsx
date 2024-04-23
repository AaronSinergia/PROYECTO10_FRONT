import './body.css';
import buttons from './buttons/buttons.jsx';
import login from './login/login.jsx';
import { mainElements } from '../../utils/data/body/main/mainElements.js';
import { bodyButtons } from '../../utils/data/body/buttons/bodyButtons.js';

const body = () => {
  const main = document.createElement('main');
  for (const mainItem of mainElements) {
    main.className = mainItem.className;
  }

  const formularyLogin = login();
  const divButton = buttons(bodyButtons);

  main.append(formularyLogin);
  main.append(divButton);

  return main;
};

export default body;
