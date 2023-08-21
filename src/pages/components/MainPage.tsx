import Image from "next/image";
import styles from "../../styles/main_page.module.css";
import ContentSection from "./Content section/ContentSection";
import HeroSection from "./hero section/HeroSection";
import MobNavbar from "./mobile navbar/MobNavbar";
export default function MainPage() {
  return (
    <div className={styles.container}>
      <MobNavbar/>
      <HeroSection/>
      <ContentSection/>
      </div>
  );
}
