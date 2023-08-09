import React from "react";
import classes from "./Home.module.css";
import Button from "react-bootstrap/Button";
import HomeData from "../../Data/HomeData";
const Home = () => {
  return (
    <>
      <div className={classes.titleHeader}>
        <h1>The Generics</h1>
        <Button variant="outline-info">Get Our Latest Album</Button>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#56ccf2"
          className="bi bi-play-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      </div>
      <section className={classes.container}>
        <h2>TOURS</h2>
        {HomeData.map((data) => (
          <div>
            <div className={classes["tour-item"]}>
              <span className={classes["tour-date"]}>{data.date}</span>
              <span className={classes["tour-place"]}>{data.place}</span>
              <span className={classes["tour-spec-place"]}>
                {data.specialPlace}
              </span>
              <button className={classes["buy-btn"]}>BUY TICKETS</button>
            </div>
          </div>
        ))}
      </section>
      <footer>
        <h2 className={classes.titleFooter}>The Generics</h2>
      </footer>
    </>
  );
};

export default Home;
