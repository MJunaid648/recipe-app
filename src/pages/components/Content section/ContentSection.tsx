import styles from "./content_section.module.css";
import Navbar from "./navbar/Navbar";
import MainSection from "./main section/MainSection";
export default function ContentSection() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainSection />
    </div>
  );
}
