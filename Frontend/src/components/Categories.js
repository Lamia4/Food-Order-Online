import React, {useState, useEffect, useContext} from 'react';
import { Container, Card, CardTitle, Button, CardImg,Row,Col,CardBody,Input } from 'reactstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Categories.css";
import getCategories from '../API/getCategories';
import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
import {SearchContext} from "./SearchProvider.js";
import {LoginContext} from "./LoginProvider.js";



function Categories() {
    const [categories, setCategories] = useState([]);
    const searchedProducts = useContext(SearchContext);
    const {isAdmin} = useContext(LoginContext);

    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories);
        })

    },[]);

    
    return (
        <div>
            <Container className=" cardContainer mt-5">
                <Row className="smCenter justify-content-md-space-between productRow mt-3">
                   <h1 style={{textAlign:"center", color: "white"}}>My Delicious Food Categories :)</h1>
                    <Search />
                    {
                        searchedProducts.isSearched ? <SearchResult/> :
                        
                        (  
                        categories.map((category,i)=>
                        {
                            return(
                                    <Col key={i} xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-3">
                                    <div className="categoryCard">
                                        <Card className="d-flex " style={{color:"black", height:"100%"}}  inverse >
                                        
                                            <CardImg  src={category.image["url"]} style={{height
                                            :"100%"}}
                                            />
                                                <CardBody className="cardBody">
                                                {
                                                isAdmin && <Input type="checkbox" className="productCheckbox" />
                                                }
                                                    <CardTitle>
                                                        <h1>{category.name}</h1>
                                                    </CardTitle>

                                                    <Link to={`/products/${category.name.toLowerCase()}`}><Button className="categoryButton">See more</Button></Link>

                                                </CardBody>
                                        </Card>
                                        </div>
                                    </Col>
                                
                            );
                        })
                     )

                    }

                    </Row>
                    
                    </Container>
                    </div>
                    )
}

export default Categories

                   