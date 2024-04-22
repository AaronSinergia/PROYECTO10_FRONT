import './footLogos.css';
import { footerLogos } from '../../../utils/data/footerLogos';

const footLogos = () => {
  const footerDiv = document.createElement('div');

  for (const logosData of footerLogos) {
    const imgLogo = document.createElement('img');
    const anchorLogo = document.createElement('a');

    anchorLogo.href = logosData.hred;
    anchorLogo.target = '_blank';
    imgLogo.alt = logosData.alt;
    imgLogo.src = logosData.src;
    imgLogo.className = logosData.className;

    anchorLogo.append(imgLogo);
    footerDiv.append(anchorLogo);
  }
  return footerDiv;
};

export default footLogos;
