import React, {useState,useEffect} from 'react';
import {Form, Button, Input, Col, Row,FormGroup } from "reactstrap";
import "./Search.css";
import {getCategories} from '../API/getCategories.js';
import "../pages/Product.css";
import {SearchContext} from "./SearchProvider.js";


function Search() {
    const searchedProducts = React.useContext(SearchContext);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
  
    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories);
        })
    },[]);
    
    const handleCategory = (e) =>{
        setCategory(e.target.value);
        setSearch("")
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        searchedProducts.setIsSearched(true);
        searchedProducts.searchUpdate(search,category, sort);
        
    }

    const handleBack = () =>{

        searchedProducts.setIsSearched(false);
        setSearch("");
        searchedProducts.getBack();
    }
   
    return (
        <>
        <div className="searchDiv" style={{display: "flex",justifyContent: "center", alignItems: "center", padding: "10px 15px"}}>
            <Row className="w-100">

            <Form  className="searchContainer w-100" onSubmit={handleSearch} style={{display: "flex", flexDirection:"row", justifyContent:"space-between", padding: "10px 0"}}>

            <Col sm={12} md={2} lg={2} className="searchColumn">
                <FormGroup className="mr-3 align-items-center mb-3">
                    <Input type="select" name="category" value={category} onChange={handleCategory} id="categoryOption"  style={{borderRadius: "20px"}}>
                            <option value="">All Foods</option>
                        {
                            categories.map((category)=>
                            {
                                return(
                                    <option value={"category=" + category._id} key={category._id} >{category.name}</option>
                                )
                            })
                        
                        }  
                    </Input>
                </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={5}  className="searchColumn">
                <FormGroup className="align-items-center mr-5 d-flex flex-direction-row mb-3" >
                    <Input onChange={e => setSearch(e.target.value.toLowerCase())}
                    value={search}
                    type="text"
                    name="searchbar"
                    className="searchbar"
                    placeholder="Search by name"
                    autoComplete="off"
                    style={{display: "flex", padding: "5px 10px", marginRight: "5px", borderRadius: "20px"}}
                    />
                    <Button type="submit" className="searchButton p-1" style={{marginRight: "3px", borderRadius: "10px", backgroundColor: "#A61C3C", color: "white", border:"none"}}>Search</Button> 
                    <Button onClick={handleBack} className="searchButton p-1"  style={{borderRadius: "10px", backgroundColor: "#A61C3C", color: "white",border:"none"}}>Return</Button>
                </FormGroup>
            </Col>
            <Col sm={12} md={2} lg={2}  className="searchColumn ">
                <FormGroup className="mr-5 align-items-center   mb-sm-3" >
                    <Input type="select" name="select" id="priceOption" value={sort} style={{borderRadius: "20px"}}
                    onChange={e => setSort(e.target.value)}>
                        <option value="">Sort by:</option>
                        <option value="sort=-price">High-Low</option>
                        <option value="sort=price">Low-High</option>
                    </Input>
                </FormGroup>
            </Col>
            </Form>
            </Row>    
        </div>
        
    </>
    )
}

export default Search