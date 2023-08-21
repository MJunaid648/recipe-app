import AdvertisementSection from "./Advertisement section/AdvertisementSection";
import CategoriesSection from "./Categories section/CategoriesSection";
import SuggestionsSection from "./Suggestions section/SuggestionsSection";
import styles from "./main_section.module.css";
export default function MainSection() {
  return (
    <div className={styles.main_section}>
      <AdvertisementSection />
      <CategoriesSection />
      <SuggestionsSection />
    </div>
  );
}
