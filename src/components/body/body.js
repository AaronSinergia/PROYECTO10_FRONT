import { apiLoginUser } from '../../api/apiLoginUser';
import registerClicked from '../../functions/registerClicked';
import './body.css';
import login from './login/login';

const body = () => {
  const main = document.createElement('main');
  main.className = 'main';

  const formularyLogin = login();

  const divButton = document.createElement('div');
  divButton.className = 'div_btn';

  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit_btn';
  submitBtn.innerHTML = 'ACCEDER';

  submitBtn.addEventListener('click', () => apiLoginUser());

  const registerBtn = document.createElement('button');
  registerBtn.className = 'register_btn';
  registerBtn.innerHTML = 'REGISTRATE';

  registerBtn.addEventListener('click', () => registerClicked());

  main.append(formularyLogin);
  main.append(divButton);
  divButton.appendChild(submitBtn);
  divButton.appendChild(registerBtn);

  return main;
};

export default body;
