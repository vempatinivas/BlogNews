import { Button,  CardBody, Col, Nav } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import NewsImage from '../assets/NewsImage.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NewsItem = ({ title, description, src, url }) => {
    
 
  return (
    <>
        <Col lg={3} className="my-3">
        <Card className="">
            <Card.Img variant="top" src={src? src: NewsImage} style={{ maxWidth:'280px', height:'180px'}}/>
            <CardBody>
                <Card.Title>{title.slice(0, 30)}</Card.Title>   
                <Card.Text>
                  {description? description.slice(0,70):"Some quick example text to build on the card title and make up the bulk of the card's content."}
                </Card.Text>
                
                <Nav.Link href={url}>
                <Button variant="primary"> Read More</Button>
                </Nav.Link>  
                
            </CardBody> 
        </Card>
        </Col>
 
    </>
  )
}
