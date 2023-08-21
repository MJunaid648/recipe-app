import styles from "./suggestions_section.module.css";
import Image from "next/image";
import smashed_potatoes from "./Smashed-Potato-Chorizo.webp";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, fas } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import Carousel_S from "./Slider/Carousel_S";
config.autoAddCss = false;
export default function SuggestionsSection() {
  const suggestions = [
    {
      id: 1,
      image: smashed_potatoes,
      recipe_name: "Smashed Potato and Chorizo Sheet Pan Salad",
      description: "This unconventional salad Smashed...",
      time_to_cook: "1 hr",
      rating_starts_count: 4,
    },
    {
      id: 2,
      image: smashed_potatoes,
      recipe_name: "Smashed Potato and Chorizo Sheet Pan Salad",
      description: "This unconventional salad Smashed...",
      time_to_cook: "1 hr",
      rating_starts_count: 4,
    },
    {
      id: 3,

      image: smashed_potatoes,
      recipe_name: "Smashed Potato and Chorizo Sheet Pan Salad",
      description: "This unconventional salad Smashed...",
      time_to_cook: "1 hr",
      rating_starts_count: 4,
    },
    {
      id: 4,

      image: smashed_potatoes,
      recipe_name: "Smashed Potato and Chorizo Sheet Pan Salad",
      description: "This unconventional salad Smashed...",
      time_to_cook: "1 hr",
      rating_starts_count: 4,
    },
  ];
  const cards = suggestions.map((item) => {
    return (
      <div className={styles.card} key={item.id}>
        <Image
          src={item.image}
          alt={item.description}
          className={styles.card_img}
        />
        <p className={styles.recipe_name}>{item.recipe_name}</p>
        <p className={styles.recipe_description}>{item.description}</p>
        <hr />
        <div className={styles.card_bottom}>
          <div className={styles.time}>
            <FontAwesomeIcon icon={faClock} size="xs" color="#aaacb0" />
            <p>{item.time_to_cook}</p>
          </div>
          <div className={styles.rating_stars}>
            <FontAwesomeIcon icon={faStar} color="#FACF55" size="xs" />
            <FontAwesomeIcon icon={faStar} color="#FACF55" size="xs" />
            <FontAwesomeIcon icon={faStar} color="#FACF55" size="xs" />
            <FontAwesomeIcon icon={faStar} color="#FACF55" size="xs" />
            <FontAwesomeIcon icon={faStar} color="#CCC4AF" size="xs" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Suggested Recipes for you</p>
        <div className={styles.buttons_group}>
          <button className={styles.left_button}>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
      <div className={styles.suggestedItemsf}>
        <Carousel_S />
      </div>
    </div>
  );
}
