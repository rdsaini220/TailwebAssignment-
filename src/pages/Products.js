import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

import {useDispatch,useSelector} from "react-redux"
import { fetchProducts, fetchProductsPage } from "../services/Actions";

const Products = () => {
  const [ page, setPage] = useState(1);
  const [ load, setload] = useState(false);
  const dispatch = useDispatch();
  const pro = useSelector((state) => state.allProducts)
  useEffect(()=>{
    dispatch(fetchProducts());
  }, [])
  window.onscroll = function (ev) {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setload(true);
      setPage(page + 1);
      dispatch(fetchProductsPage(page));
    }else{
      setload(false);
    }
  };
  return (
    <Container className="mt-4">
      <Row className="g-1">        
          {
            pro?(
              pro.map((data) => {
                const {id,name,description,image,price,discount_amount,status} = data
                return status ? (
                  <Col lg={3}>
                    <ProductCard id={id} name={name} description={description} image={image} price={price}  discount_amount={discount_amount} />
                  </Col>
                ) : (
                  ""
                );
              })
            ):'Loading...'}
          <Col lg={12} className='text-center py-4'>
            {
              load?(<h5>Load More</h5>):('')
            }
          </Col>
      </Row>
    </Container>
  );
}

export default Products;

