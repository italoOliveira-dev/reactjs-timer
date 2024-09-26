import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { Scroll, Timer } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo ignit" />
      <nav>
        <NavLink to="/" title="time">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
