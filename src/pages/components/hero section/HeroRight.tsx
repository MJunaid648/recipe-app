import styles from "./hero_section.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;
export default function HeroRight() {
  return (
    <div className={styles.hero_right}>
      <p className={styles.greeting_text_name}>Hello Junaid,</p>
      <div className={styles.right_container}>
        <h1 className={styles.greeting_text_heading}>Discover Recipes</h1>
        <div className={styles.searchBar}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: 14, color: "#CACACA" }}
          />
          <input
            type="text"
            placeholder="Search for Recipes, Ingredients and Tags"
          />
        </div>
      </div>
    </div>
  );
}
