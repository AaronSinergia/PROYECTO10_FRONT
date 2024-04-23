import './login.css';

const login = () => {
  const form = document.createElement('form');

  form.innerHTML = `
    <label>USUARIO</label>
    <input type="text" id='usuario' name='usuario'>
    <label>CONTRASEÑA</label>
    <input type="password" id='contraseña' name='contraseña'>
    `;

  return form;
};

export default login;
