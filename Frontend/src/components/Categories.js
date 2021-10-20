import React, {useState, useEffect, useContext} from 'react';
import { Container, Card, CardTitle, Button, CardImg,Row,Col,CardBody, CardText } from 'reactstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Categories.css";
import {getCategories} from '../API/getCategories';
import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
import {SearchContext} from "./SearchProvider.js";
import {LoginContext} from "./LoginProvider.js";
import CreateCategory from "./CreateCategory.js";
import EditCategory from "./EditCategory.js";



function Categories() {
    const [categories, setCategories] = useState([]);
    const searchedProducts = useContext(SearchContext);
    const {admin} = useContext(LoginContext);

    useEffect(() => {
        getCategoriesData();
    },[]);

    const getCategoriesData = () =>{
        getCategories()
        .then(categories => {
            setCategories(categories);
        })
    }


    return (
        <div>
            <Container className=" cardContainer mt-5">
                <Row className="smCenter justify-content-md-space-between productRow mt-3">
                   <h1 style={{textAlign:"center", color: "white", marginBottom: "5vh"}}>My Delicious Food Categories &#9825;</h1>
                    {!admin && <Search />}
                    {admin && <CreateCategory getCategoriesData={getCategoriesData}/>}
                    {
                        searchedProducts.isSearched ? 
                        (searchedProducts.products.length !== 0?
                            <SearchResult/>
                            :
                            <CardText className="mb-5" style={{color: "white", textAlign: "center", fontSize: "28px"}}>I'm sorry ! There are no results ! :( </CardText> )
                         :
                        
                        ( 
                        categories.length !==0 
                        ?  
                        categories.map((category,i)=>(
                        
                            admin?  <EditCategory category={category} key={i} getCategoriesData={getCategoriesData}/>
                            :
                            
                                    <Col key={i} xs ={10} md={6} lg={4} style={{height:"55vh"}} className=" mb-3">
                                    <div className="categoryCard">
                                        <Card className="d-flex " style={{color:"black", height:"100%"}}  inverse >
                                        
                                            <CardImg  src={category.image["url"]} style={{height
                                            :"100%"}}
                                            />
                                                <CardBody className="cardBody">
                                               
                                                    <CardTitle>
                                                        <h1>{category.name}</h1>
                                                    </CardTitle>

                                                    <Link to={`/products/${category.name.toLowerCase()}`}><Button className="categoryButton">See more</Button></Link>

                                                </CardBody>
                                        </Card>
                                        </div>
                                    </Col>
                                
                           
                        ))
                        : <div>loading...</div>
                        )

                    }

                    </Row>
                    
                    </Container>
                    </div>
                    )
}

export default Categories

                   