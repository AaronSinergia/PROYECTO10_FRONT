import './register.css';

const register = () => {
  const h2 = document.querySelector('.h2');
  h2.innerHTML = 'REGISTRA UN NUEVO USUARIO';

  const form = document.createElement('form');

  form.innerHTML = `
    <label>USUARIO</label>
    <input type="text" id='usuario' name='usuario'>
    <label>CONTRASEÑA</label>
    <input type="password" id='contraseña' name='contraseña'>
    `;

  return form;
};

export default register;
