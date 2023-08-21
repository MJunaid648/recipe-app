import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./advertisement_section.module.css";
import { faClock, faBowlRice, faStar } from "@fortawesome/free-solid-svg-icons";
export default function AdvertisementSection() {
  const RatingFullStar = (
    <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#facf55" }} />
  );
  const rating = (
    <div className={styles.rating}>
      {RatingFullStar}
      {RatingFullStar}
      {RatingFullStar}
      {RatingFullStar}
      {RatingFullStar}
    </div>
  );
  return (
    <div className={styles.advertisement_section}>
      <div className={styles.recipe_ad}>
        <span>POPULAR</span>
        <p>Vegan:chicken & Chips</p>
        <p>with chilled pepsi</p>
        <div className={styles.time}>
          <FontAwesomeIcon icon={faClock} />
          <p>25 min</p>
          {rating}
        </div>
      </div>
      <div className={styles.seeBookmarks_section}>
        <FontAwesomeIcon
          className="bowl_icon"
          size="3x"
          color="#903D1A"
          icon={faBowlRice}
        />
        <p>
          You have <span className={styles.bookmarked_recipe_count}>3</span> new
          recipes in your bookmark
        </p>
        <a>See bookmark</a>
      </div>
    </div>
  );
}
