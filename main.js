import './style.css';
import header from './src/components/header/header';
import body from './src/components/body/body';
import footer from './src/components/footer/footer';

export const appMainBody = () => {
  const appID = document.querySelector('#app');

  const mainHeader = header();
  const mainBody = body();
  const mainFooter = footer();

  appID.append(mainHeader);
  appID.append(mainBody);
  appID.append(mainFooter);
};

appMainBody();
