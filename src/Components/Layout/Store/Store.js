import React from "react";
import Data from "../../Data/Data";
import MerchData from "../../Data/MerchData";
import { Button } from "react-bootstrap";
import Album from "./Album";
import Merch from "./Merch";
import Header from "../../Header/Header";
import Footer from "../Footer";

const STORE = (props) => {
  return (
    <>
      <Header />
      <div className=" container " style={{ width: "60%", height: "30%" }}>
        <h1
          style={{
            fontFamily: "Metal Mania",
            fontWeight: "bold",
            textAlign: "center",
            margin: "20px",
          }}
        >
          MUSIC
        </h1>
        <div className="album row row-cols-1 row-cols-md-2 g-4">
          {Data.map((item, index) => {
            return (
              <Album
                title={item.title}
                url={item.imageUrl}
                price={item.price}
                des={item.description}
                key={index}
                id={item.id}
                item={item}
              />
            );
          })}
        </div>

        <h1
          style={{
            fontFamily: "Metal Mania",
            fontWeight: "bold",
            textAlign: "center",
            margin: " 50px 0 20px 0",
          }}
        >
          MERCH
        </h1>
        <div className="album row row-cols-1 row-cols-md-2 g-4">
          {MerchData.map((item, index) => {
            return (
              <Merch
                title={item.title}
                url={item.imageUrl}
                price={item.price}
                des={item.description}
                key={index}
                id={item.id}
                item={item}
              />
            );
          })}
        </div>
        <div onClick={props.onShow} className="text-center m-5">
          <Button variant="info">Cart</Button>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default STORE;
