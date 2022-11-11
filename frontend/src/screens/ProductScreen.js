import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreen = () => {
    const {id} = useParams();
    //const product = products.find((p) => p._id === id);

    const [product, setProduct] = useState({})

    useEffect(()=>{
        const fetchProducts = async () => {
          const {data} = await axios.get(`/api/products/${id}`)
    
          setProduct(data)
        }
    
        fetchProducts()
    }, [])
    
   // if(!product) return null;

   // return ( <div>{product.name}</div> );

   return (
    <>
        <Link className='btn btn-outline-primary' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flust'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating 
                            value={product.rating} 
                            text={product.numReviews}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ₹{product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: ₹{product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>₹{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock>0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroupItem>
                            <Button 
                                className='btn btn-success btn-block btn-wd' 
                                type='button'
                                disabled={product.countInStock===0}
                            >
                                Add To Cart
                            </Button>
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
   )

}

export default ProductScreen