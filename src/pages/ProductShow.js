import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { fetchProductDetails } from "../services/Actions";

const ProductShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const proId = history.location.pathname.split("/").pop()
  const pro = useSelector((state) => state.ProductDetails); 
  useEffect(() => {
    dispatch(fetchProductDetails(proId));    
  }, [])
  return (
    <Container className={"mt-5"}>
      {pro.data ? (
        <div className={"shadow"}>
          <Row>
            <Col lg={6}>
              <div style={{ "max-height": "400px", overflow: "hidden" }}>
                <img
                  style={{ width: "100%", objectFit: "cover" }}
                  src={pro.data.image}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className={"p-4"}>
                <h5>{pro.data.name}</h5>
                <h6>
                  <del clasaName={"mr-2 mx-2"} style={{ "font-size": "12px" }}>
                    ₹{pro.data.price}
                  </del>{" "}
                  ₹{pro.data.discount_amount}
                </h6>
                <p>{pro.data.description}</p>
                <div>
                  <h5>Categories</h5>
                  {
                    pro.data.categories.map((val) => {
                       return (
                        <span class="badge badge-secondary mr-2 mb-2">
                         {val.name}
                        </span>
                       )
                    })
                  }
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ) : ("Loading...")}
    </Container>
  );
};

export default ProductShow;
