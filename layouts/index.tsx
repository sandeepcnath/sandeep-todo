import styled from 'styled-components';
import Navbar from '../components/navbar';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
`;

const DefaultLayout = ({ children }) => (
  <PageWrapper>
    <Navbar />
    {children}
  </PageWrapper>
);

export default DefaultLayout;
