import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCard({book}) {
    console.log(book.data().name);
    const prop=book.data();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title >{prop.name}</Card.Title>
        <Card.Text>
        This Book has a title {prop.name} and this book is sold by {prop.displayname} and this book cost Rs. {prop.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;