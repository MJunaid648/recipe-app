import styles from "./hero_section.module.css";
export default function HeroLeft() {
  return (
    <div className={styles.hero_left}>
      <h2 className={styles.left_heading}>
        Plan<span>life.</span>
      </h2>
      <p className={styles.tag_Line}>Healthy meals, healthy life.</p>
      <button className={styles.new_btn}>+ create new</button>
    </div>
  );
}
