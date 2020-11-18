import MyKitchen from './MyKitchen';
import { Container, Jumbotron ,Navbar} from 'react-bootstrap';
import './App.css';

const App = () => (
  <>
    <Jumbotron style={{background:"coral"}}>
      <h3>Hamaman Kitchen</h3>
      <p> welcome to your kitchen  </p>
    </Jumbotron>
    <Container>
      <MyKitchen />
    </Container>
  </>
);

export default App;
