import styles from "./carousel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default function Carousel_S() {
  return (
    <div className={styles.carousel_container}>
      <Carousel className={styles.carousel}>
        <Carousel.Item interval={3000}>
          <div className={styles.carousel_item}>
            <img
              // className="d-block w-25"
              src="./Images/1.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/3.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/6.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className={styles.carousel_item}>
            <img
              // className="d-block w-25"
              src="./Images/2.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/5.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/3.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className={styles.carousel_item}>
            <img
              // className="d-block w-25"
              src="./Images/9.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/4.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/2.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className={styles.carousel_item}>
            <img
              // className="d-block w-25"
              src="./Images/5.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/8.jpg"
              alt="First slide"
            />{" "}
            <img
              // className="d-block w-25"
              src="./Images/6.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
