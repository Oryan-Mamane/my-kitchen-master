import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const Recipe = ({
  dishId,
  dishName,
  dishDesc,
  dishImage,
  dishReady,
  onClicked,
}) => (
  <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={dishImage} />
    <Card.Body>
      <Card.Title style={{textAlign:"center"}}>{dishName}</Card.Title>
      <Card.Text>{dishDesc}</Card.Text>
      <div style={{textAlign:"center"}}>
      <Button variant="primary" onClick={() => onClicked(dishId)}>
        {dishReady ? 'EAT!' : 'Prepare dish'}
        </Button>
      </div>
     
    </Card.Body>
  </Card>
);

Recipe.propTypes = {
  dishId: PropTypes.number.isRequired,
  dishName: PropTypes.string.isRequired,
  dishDesc: PropTypes.string,
  dishImage: PropTypes.string.isRequired,
  dishReady: PropTypes.number.isRequired,
  onDishClicked: PropTypes.func.isRequired,
};

export default Recipe;
