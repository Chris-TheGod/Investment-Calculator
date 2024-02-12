import logo from '../assets/investment-calculator-logo.png';

export const Header = () => {
  return (
    <header id='header'>
      <img src={logo} alt='Logo' />
      <h1>Investment Calaculator</h1>
    </header>
  );
};
