import type { ReactNode } from "react";
import Link from "next/link";
import type { Release } from "../data/releases";
import { withBasePath } from "../lib/paths";
import styles from "./ReleaseCard.module.css";

function CardBanner({ codename }: { codename: string }) {
  return (
    <div className={styles.cardBanner}>
      <span className={styles.cardBannerVersion}>{codename}</span>
    </div>
  );
}

function CardMedia({ image, version, codename }: Pick<Release, "image" | "version" | "codename">) {
  if (image) {
    return <img src={withBasePath(image)} alt={`Xinux ${version}`} className={styles.cardImage} />;
  }
  return <CardBanner codename={codename} />;
}

export function ReleaseCard({ version, codename, date, image, href, description, featured }: Release) {
  if (featured) {
    return (
      <Link href={href} className={`${styles.card} ${styles.featured}`}>
        <div className={styles.cardImageWrapper}>
          <CardMedia image={image} version={version} codename={codename} />
        </div>
        <div className={styles.cardBody}>
          <span className={styles.featuredLabel}>Oxirgi reliz</span>
          <h3 className={styles.cardVersion}>
            Xinux {version}
          </h3>
          {description && <p className={styles.featuredDescription}>{description}</p>}
          <p className={styles.cardDate}>{date}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <CardMedia image={image} version={version} codename={codename} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardVersion}>
          Xinux {version}
        </h3>
        <p className={styles.cardDate}>{date}</p>
      </div>
    </Link>
  );
}

export function ReleaseGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
