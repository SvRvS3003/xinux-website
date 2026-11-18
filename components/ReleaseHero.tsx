import styles from "./ReleaseHero.module.css";

type ReleaseHeroProps = { version: string; codename?: string; date: string; description?: string };

export function ReleaseHero({ version, codename, date, description }: ReleaseHeroProps) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroVersion}>
        Xinux {version}
        {codename && <span className={styles.heroCodename}> ({codename})</span>}
      </h1>
      <p className={styles.heroDate}>{date}</p>
      {description && <p className={styles.heroDescription}>{description}</p>}
    </div>
  );
}
