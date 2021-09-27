import React, {useState} from 'react';
import {Form, Button, Input, Col } from "reactstrap";
import "./Search.css";

function Search() {
    const [searchInput, setSearchInput] = useState("");

    const handleInput = (e) =>{
        setSearchInput(e.target.value);
    }
    
    const handleBack= () => {
       
    }
    const handleSearch = (e)=> {
        e.preventDefault();
        setSearchInput("");


    }

    return (
        <div className="searchDiv" style={{display: "flex",justifyContent: "center", alignItems: "center", padding: "10px 15px"}}>
            <Col xs={10} md={12} lg={6} className="searchColumn">
            <Form onSubmit={handleSearch} className="searchbar-container" style={{display: "flex",  padding: "10px 0"}}>
                  <Input onChange={handleInput}
                    value={searchInput}
                    type="text"
                    name="searchbar"
                    id="searchbar"
                    className="searchbar"
                    placeholder="Search by name"
                    autoComplete="off"
                    style={{display: "flex", padding: "5px 10px", marginRight: "5px", borderRadius: "20px"}}
                  />
                  <Button type="submit" className="searchButton" style={{padding: "5px", marginRight: "3px", borderRadius: "10px", background: "darkorange", color: "white"}}>Search</Button> 
                <Button className="searchButton" onClick={handleBack}  style={{padding: "5px", borderRadius: "10px", background: "darkorange", color: "white"}}>Return</Button>
            </Form>
            </Col>
        </div>
    )
}

export default Search
