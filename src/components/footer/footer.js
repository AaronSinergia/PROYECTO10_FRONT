import './footer.css';
import footerLogos from './footerLogos/footerLogos';

const footer = () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const footerTitle = document.createElement('h3');
  footerTitle.innerHTML = '© Creado por Aaron Carrasco Romero - 2024';
  footerTitle.className = 'footer_title';

  const logos = footerLogos();

  footer.appendChild(logos);
  footer.appendChild(footerTitle);

  return footer;
};

export default footer;
