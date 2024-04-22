import '../components/body/body.css';
import register from '../components/body/register/register';
import returnToLogin from './returnToLogin';
import { apiRegisterUser } from '../api/apiRegisterUser';

const registerClicked = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const formularyRegister = register();

  const divButtonTwo = document.createElement('div');
  divButtonTwo.className = 'div_btn';

  const confirmBtn = document.createElement('button');
  confirmBtn.className = 'confirm_btn';
  confirmBtn.innerHTML = 'CONFIRMA EL REGISTRO';

  confirmBtn.addEventListener('click', () => apiRegisterUser());

  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit_btn_two';
  submitBtn.innerHTML = 'LOGUEATE CON TU USUARIO';

  submitBtn.addEventListener('click', () => returnToLogin());

  main.append(formularyRegister);
  main.append(divButtonTwo);
  divButtonTwo.append(confirmBtn);
  divButtonTwo.append(submitBtn);
};

export default registerClicked;
