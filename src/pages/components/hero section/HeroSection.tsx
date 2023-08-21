import styles from './hero_section.module.css';
import Hero_Left from "./HeroLeft";
import Hero_Right from './HeroRight';
export default function HeroSection() {
  return (
    <>
      <div className={styles.hero_section}>
        <Hero_Left/>
        <Hero_Right/>
      </div>
    </>
  );
}
