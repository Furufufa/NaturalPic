import { Container } from 'react-bootstrap';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="home-title">Natural Pic</h1>
      <Gallery view="Home" />
    </Container>
  );
};
export default Home;



