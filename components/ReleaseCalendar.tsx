import type { ScheduleEntry } from "../data/releases";
import styles from "./ReleaseCalendar.module.css";

const badgeClass: Record<string, string> = {
  stable: styles.badgeStable,
  unstable: styles.badgeUnstable,
  eol: styles.badgeEol,
  dev: styles.badgeDev,
};

const badgeLabel: Record<string, string> = {
  stable: "Stabil",
  unstable: "Nostabil",
  eol: "Eskirgan",
  dev: "Rivojlanmoqda",
};

export function ReleaseTable({ releases }: { releases: ScheduleEntry[] }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Versiya</th>
            <th>Turi</th>
            <th>Sana</th>
            <th>Mas'ul</th>
          </tr>
        </thead>
        <tbody>
          {releases.map((r, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600 }}>{r.version}</td>
              <td>
                <span className={`${styles.badge} ${badgeClass[r.type] || ""}`}>
                  {badgeLabel[r.type] || r.type}
                </span>
              </td>
              <td>{r.date}</td>
              <td>
                {r.notes ? (
                  <a href={`https://github.com/${r.notes}`} target="_blank" rel="noreferrer" className={styles.assignee}>@{r.notes}</a>
                ) : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
