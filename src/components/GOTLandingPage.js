import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/GotActions";
import CharaterDetailsSearch from "./components/CharaterDetailsSearch";
import styled from "styled-components"
import { Navbar, Container, Button } from "react-bootstrap"
import logo from "./../assets/GOT.gif"
import george from "./../assets/GeorgeRRMArtin.gif"
import { device } from "./../static/Resolution"

const LandingPageContainer = styled.div`
border-radius: 2px;
box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background-color: white;
width: 100%;
border-radius: 20%;

max-width: 1000px;
margin-top: 18px;
padding-top: 18px;
padding-bottom: 18px;
margin-bottom: 20px;
@media ${device.tablet} {
    max-width: 600px;
}
@media ${device.tabletL} {
    max-width: 800px;
}
@media ${device.laptop} {
    max-width: 1000px;
}
@media ${device.laptopM} {
    max-width: 1200px;
}

`;

const ImageStyle = styled.img`
    border-radius: 20%;
    width: 70%;
    margin-bottom: 4%;
`;

const MainContainer = styled.div`
    margin-top: 72px;
    display: flex;
    align-items: center;
    justify-contents: center;
    flex-direction: column;
`;

const TextStyle = styled.h1`
    font-family: cursive;
    margin-bottom: 4%;
`;

const AuthorText = styled.h3`
font-family: cursive;

`;

const ImageAuthorStyle = styled.img`
border-radius: 50%;
margin-bottom: 4%;

`;


const initialPageNavigation = {
    showLandingPage: true,
    showCharacterDetails: false,
    showPOVCharacterDetails: false
}

const ProductPage = (props) => {
    const [pageNavigation, setPageNavigation] = useState(initialPageNavigation);
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://anapioficeandfire.com/api/books/1")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearch = () => {
        setPageNavigation({
            showLandingPage: false,
            showCharacterDetails: true
        })
    }

    console.log("Products :", products);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        GOATED SHOW
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <MainContainer>
                {pageNavigation.showLandingPage ? (
                    <>
                        <LandingPageContainer>
                            <TextStyle>{products.name}</TextStyle>
                            <ImageStyle src={logo} />
                            <>
                                <AuthorText>By {products.authors}</AuthorText>
                                <ImageAuthorStyle src={george} />
                                <Button variant="danger" onClick={handleSearch}>Characters Search</Button>
                            </>
                        </LandingPageContainer>
                    </>
                ) : null}
                {pageNavigation.showCharacterDetails ? (
                    <CharaterDetailsSearch />
                ) : null}
               
            </MainContainer>
        </>
    );
};

export default ProductPage;
