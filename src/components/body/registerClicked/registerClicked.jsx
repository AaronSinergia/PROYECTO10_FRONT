import register from '../register/register';
import buttons from '../buttons/buttons';
import { registerButtons } from '../../../utils/data/body/buttons/registerButtons';

const registerClicked = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const formularyRegister = register();
  const divButton = buttons(registerButtons);

  main.append(formularyRegister);
  main.append(divButton);
};

export default registerClicked;
