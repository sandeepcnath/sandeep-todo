import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background: #e6e6e6;
  padding: 0.5rem 1rem;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">
        <a>
          <Image src={Logo} alt="Trello logo" width={100} height={28} />
        </a>
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
