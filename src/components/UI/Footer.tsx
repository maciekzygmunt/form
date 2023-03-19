import ReactIcon from '@/assets/react-js-icon.svg';
import TailwindIcon from '@/assets/tailwind-css-icon.svg';
import ViteIcon from '@/assets/Vitejs-logo.svg';

const Footer = () => {
  return (
    <div className="flex gap-1">
      <span>Build with</span>
      <img src={ReactIcon} className="w-6 h-6" />
      <img src={TailwindIcon} className="w-6 h-6" />
      <img src={ViteIcon} className="w-6 h-6" />
      <span>
        by{' '}
        <a href="https://github.com/maciekzygmunt" target="_blank" className="text-primary">
          Maciej Zygmunt
        </a>
      </span>
    </div>
  );
};

export default Footer;
