import Link from "next/link";
import { apps } from "../data/apps";
import { releases } from "../data/releases";
import { withBasePath } from "../lib/paths";
import styles from "./HomePage.module.css";

const propositions = [
  {
    title: "O'rnatuvchi hammasini o'zi qiladi",
    text: "Wiki va forumlarni titkilash shart emas, o'rnatish bir necha bosqichdan iborat.",
    icon: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12",
  },
  {
    title: "Bepul va shartsiz",
    text: "Reklama, obuna yoki majburiy hisob yo'q. Tizim sizniki.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
  },
  {
    title: "O'zbek tilida",
    text: "Interfeys, qo'llanma va hamjamiyat yordami ona tilingizda.",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  },
  {
    title: "NixOS asosida",
    text: "Deklarativ konfiguratsiya, qayta tiklanadigan tizim va orqaga qaytarish.",
    icon: "M4 7h16M4 12h16M4 17h16M8 4v3M16 4v3M8 17v3M16 17v3",
  },
  {
    title: "Ochiq hamjamiyat",
    text: "Savollar, takliflar va yordam uchun Telegram guruhimiz har doim ochiq.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "O'z ilovalari bilan",
    text: "Xeonitte, Software Center va boshqa vositalar Xinux uchun yozilgan.",
    icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  },
];

const builtins = [
  "GNOME ishchi muhiti",
  "NixOS va flakes",
  "To'liq disk shifrlash",
  "Btrfs va snapshotlar",
  "E-IMZO qo'llab-quvvatlash",
  "Secure Boot",
];

const footer = [
  {
    heading: "Asosiy",
    links: [
      ["Bosh sahifa", "/"],
      ["Qo'llanma", "/learn"],
      ["Yuklash", "/download"],
      ["Relizlar", "/releases"],
    ],
  },
  {
    heading: "Dasturlash",
    links: [
      ["Forgejo", "https://git.oss.uzinfocom.uz/xinux"],
      ["Hydra", "https://hydra.xinux.uz"],
      ["Ilovalar", "/apps"],
      ["Foydali dasturlar", "/utils"],
    ],
  },
  {
    heading: "Ma'lumot",
    links: [
      ["Foydali havolalar", "/links"],
      ["Reliz kalendari", "/releases/calendar"],
      ["NixOS", "https://nixos.org"],
    ],
  },
  {
    heading: "Hamjamiyat",
    links: [
      ["Telegram guruhi", "https://t.me/xinux"],
      ["Mahalliylashtirish", "/l10n"],
      ["Tarjimonlar guruhi", "https://t.me/uzbekl10n"],
    ],
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function ReleaseMark({ version, codename, image }: { version: string; codename: string; image?: string }) {
  if (image) {
    return <img className={styles.flavorImage} src={withBasePath(image)} alt={`Xinux ${version} ${codename}`} width="128" height="72" />;
  }
  return <span className={styles.flavorMark}>{version}</span>;
}

export default function HomePage() {
  const featured = releases.find((r) => r.featured) ?? releases[releases.length - 1];
  const stable = releases.filter((r) => !r.featured);

  return (
    <div className={styles.page}>
      <div className={styles.highlightBar}>
        <div className={styles.container}>
          <Link href={featured.href}>Xinux {featured.version} «{featured.codename}» ustida ish ketmoqda, {featured.date}</Link>
        </div>
      </div>

      <div className={styles.introHolder}>
        <div className={`${styles.container} ${styles.intro}`}>
          <div className={styles.introPrimary}>
            <h1>Linux, o'zbekcha<span className={styles.beat}>!</span></h1>
            <p>Xinux NixOS asosida qurilgan, GNOME muhitli va o'zbek tiliga moslangan operatsion tizim.</p>
          </div>
          <div className={styles.screenshot}>
            <img src={withBasePath("/release/26.05/mahalla.jpg")} width="600" height="374" alt="Xinux ish stoli" />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.propositions}>
          {propositions.map((p) => (
            <div className={styles.proposition} key={p.title}>
              <div className={styles.image}>
                <Icon d={p.icon} />
              </div>
              <div className={styles.text}>
                <h3>{p.title}</h3>
                <div className={styles.description}>{p.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.builtins}>
          <div className={styles.builtinsPrimary}>
            <h3>Tizimda bor</h3>
          </div>
          <ul className={styles.builtinsSecondary}>
            {builtins.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.flavorsBg}>
        <div className={styles.container}>
          <h3>Relizlar</h3>
          <div className={styles.flavors}>
            <div className={styles.flavorHolder}>
              {stable.map((r) => (
                <Link className={styles.flavor} href={r.href} key={r.version}>
                  <ReleaseMark {...r} />
                  <div>
                    <div className={styles.topLine}>
                      <div className={styles.name}>{r.codename}</div>
                    </div>
                    <div className={styles.description}>Stabil reliz, {r.date}</div>
                  </div>
                </Link>
              ))}
              <Link className={styles.flavor} href={featured.href}>
                <ReleaseMark {...featured} />
                <div>
                  <div className={styles.topLine}>
                    <div className={styles.name}>{featured.codename}</div>
                    <span className={styles.tag}>Nostabil</span>
                  </div>
                  <div className={styles.description}>Keyingi reliz, {featured.date}</div>
                </div>
              </Link>
            </div>
          </div>

          <h3>Xinux ilovalari</h3>
          <div className={`${styles.flavors} ${styles.carousel}`}>
            <div className={styles.track}>
              {[...apps, ...apps].map((a, i) => (
                <a className={styles.flavor} href={a.href} key={`${a.name}-${i}`} target="_blank" rel="noreferrer" aria-hidden={i >= apps.length}>
                  <img className={styles.appIcon} src={withBasePath(a.icon)} alt="" width="64" height="64" />
                  <div>
                    <div className={styles.topLine}>
                      <div className={styles.name}>{a.name}</div>
                    </div>
                    <div className={styles.description}>{a.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.fineprint}>
            Hali NixOS bilan tanish emasmisiz? <Link href="/learn">Qo'llanmadan</Link> boshlang.
          </div>
        </div>
      </div>

      <div className={styles.footerHolder}>
        <footer className={styles.container}>
          <div className={styles.links}>
            {footer.map((set) => (
              <div className={styles.linkSet} key={set.heading}>
                <div className={styles.linkSetHeading}>{set.heading}</div>
                <ul>
                  {set.links.map(([label, href]) => (
                    <li key={href}>
                      {href.startsWith("/") ? (
                        <Link href={href}>{label}</Link>
                      ) : (
                        <a href={href} target="_blank" rel="noreferrer">
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.bottomBar}>
            <div>
              © {new Date().getFullYear()} Xinux hamjamiyati · Powered by Sv
              <span className={styles.credit} tabIndex={0}>
                R
                <span className={styles.creditCard} role="tooltip">
                  <strong>Saidakbar Abdurashidov</strong>
                  <a href="https://t.me/SvRvS_3003" target="_blank" rel="noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9.04 15.47 8.7 20.1c.47 0 .68-.2.93-.45l2.23-2.13 4.62 3.38c.85.47 1.45.22 1.68-.78l3.04-14.25c.27-1.24-.45-1.73-1.27-1.42L2.1 11.33c-1.21.47-1.19 1.14-.21 1.45l4.52 1.41 10.5-6.62c.49-.3.94-.14.57.17z" />
                    </svg>
                    @SvRvS_3003
                  </a>
                </span>
              </span>
              vS
            </div>
            <a href="https://t.me/xinux" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
