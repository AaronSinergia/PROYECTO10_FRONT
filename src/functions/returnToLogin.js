import body from '../components/body/body';

const returnToLogin = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const h2 = document.querySelector('.h2');
  h2.innerHTML = 'INICIO DE SESION';

  const formularyLogin = body();

  main.appendChild(formularyLogin);
};

export default returnToLogin;
