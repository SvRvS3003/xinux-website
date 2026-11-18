import styles from "./LogoMark.module.css";

export default function LogoMark({ size = 24, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <svg
      width={size}
      height={size * 613 / 1003}
      viewBox="0 0 1003 613"
      fill="currentColor"
      className={animated ? styles.animated : undefined}
      aria-hidden="true"
    >
      <polygon className={styles.p1} points="501.946989 612 854 2.5162448 692.207329 1 598.2189 164.746663 503.557486 1.87475661 423.168807 1.90585907 382 72.9983011 516.861589 304.754375 421.12651 471.253605" />
      <polygon className={styles.p2} points="408.244609 447 156 0 312.05486 0 489 306.337213" />
      <polygon className={styles.p3} points="883.052022 2 531 611.483755 692.790115 613 786.779318 449.253337 881.441512 612.125243 961.830854 612.094141 1003 541.001699 868.1373 309.245625 963.877057 142.746395" />
      <polygon className={styles.p4} points="119.946409 2 472 611.483755 310.207062 613 216.218478 449.253337 121.560798 612.125243 41.1696526 612.094141 0 541.001699 134.861033 309.245625 39.1242407 142.742508" />
    </svg>
  );
}
