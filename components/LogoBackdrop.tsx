"use client";

import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";
import styles from "./LogoBackdrop.module.css";

export default function LogoBackdrop() {
  const pathname = usePathname();
  return (
    <div className={styles.backdrop} key={pathname}>
      <LogoMark size={720} animated />
    </div>
  );
}
