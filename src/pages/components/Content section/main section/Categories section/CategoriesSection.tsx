import styles from "./categories_section.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassCheers,
  faCoffee,
  faFish,
  faDrumstickBite,
  faGift,
  faClock,
  faWineBottle,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";
export default function CategoriesSection() {
  const categories = [
    { category: "Appetizers & Snacks", id: 1, icon: faWineBottle },
    { category: "Baking Recipes", id: 2, icon: faBurger },
    { category: "Barbeque & Grilling", id: 3, icon: faFish },
    { category: "Breakfast & Brunch", id: 4, icon: faCoffee },
    { category: "Chicken Recipes", id: 5, icon: faDrumstickBite },
    { category: "Holiday Recipes", id: 6, icon: faGift },
    { category: "Quick & Easy", id: 7, icon: faClock },
    { category: "Healthy Recipes", id: 8, icon: faGlassCheers },
  ];
  const cards = categories.map((item) => {
    return (
      <div className={styles.card} key={item.id}>
        <FontAwesomeIcon
          className={styles.icon}
          color=" #000000"
          size="xl"
          icon={item.icon}
        />
        <p className={styles.category_name}>{item.category}</p>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Categories</p>
        <Link className={styles.link} href="#">
          {"See all >"}
        </Link>
      </div>
      <div className={styles.cards_section}> {cards}</div>
    </div>
  );
}
