import { createFileRoute } from "@tanstack/react-router"
import styles from "./social-links-profile.module.css"
import avatar from "@/assets/images/avatar-jessica.jpeg"

export const Route = createFileRoute("/(getting-started)/social-links-profile")(
  {
    component: RouteComponent,
  }
)

function RouteComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.avatar}
          height={96}
          width={96}
          src={avatar}
          alt="avatar"
        />
        <h2 className={styles.title}>Jessica Randall</h2>
        <address className={styles.address}>
          London, United Kingdom
        </address>{" "}
        <q className={styles.quote}>Front-end developer and avid reader.</q>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
          </li>

          <li>
            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>

          <li>
            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
