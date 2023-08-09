import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../Data/Data";
import MerchData from "../Data/MerchData";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import "./ProductDetails.css";
import { useCart } from "react-use-cart";
const ProductDetails = (props) => {
  //   const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const singleProduct =
    Data.find((item) => item.id === productId) ||
    MerchData.find((item) => item.id === productId);
  if (!singleProduct) {
    return (
      <>
        <br />
        <br />
        <br />
        <div className="text-center">
          <h1>No Product found</h1>
          <Button onClick={() => navigate("/Store")}>Back To Home Page</Button>
        </div>
      </>
    );
  }

  //   console.log(singleProduct.title);

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col xs={10} md={7} lg={5} className="p-0">
          <Lightbox
            key={singleProduct.id}
            images={[
              {
                src: singleProduct.imageUrl,
                title: singleProduct.title,
                description: "productimages1",
              },
              {
                src: singleProduct.imageUrl1,
                title: singleProduct.title,
                description: "productimages2",
              },
              {
                src: singleProduct.imageUrl2,
                title: singleProduct.title,
                description: "productimages3",
              },
              {
                src: singleProduct.imageUrl3,
                title: singleProduct.title,
                description: "productimages4",
              },
            ]}
          />
        </Col>
        <Col xs={10} md={7} lg={7} className="product-details">
          <h1>{singleProduct.title}</h1>
          <b className="h4">Rs {singleProduct.price}</b>
          <br />
          <br />
          <b className="h5">4.1 ⭐</b>
          <p className="mt-3 h5" style={{ opacity: "0.8", fontWeight: "400" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur reiciendis distinctio, similique beatae expedita
            pariatur impedit, magni, dolores commodi repellendus provident quos
            velit maiores accusamus omnis aperiam quis vitae. Eos, enim aut.
            Recusandae ad quis, id eum illum a voluptate provident dignissimos
            quos rerum, inventore voluptates, fuga temporibus
          </p>

          <Button variant="info" onClick={() => addItem(singleProduct)}>
            Add To cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
