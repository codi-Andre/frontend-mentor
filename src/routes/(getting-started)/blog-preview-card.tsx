import { createFileRoute } from "@tanstack/react-router"
import styles from "./blog-preview-card.module.css"
import svgArt from "@/assets/images/illustration-article.svg"
import avatar from "@/assets/images/image-avatar.webp"

export const Route = createFileRoute("/(getting-started)/blog-preview-card")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.container}>
      <a className={styles.card}>
        <img
          className={styles.image}
          src={svgArt}
          height={200}
          width={279}
          alt=""
        />

        <div>
          <span className={styles.badge}>Learning</span>

          <p className={styles.date}>
            Published <time dateTime="2023-11-21">21 Dec 2023</time>
          </p>

          <h2 className={styles.title}>HTML & CSS foundations</h2>

          <p className={styles.description}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>

        <span className={styles.avatar}>
          <img src={avatar} height={32} width={32} alt="avatar" />
          Greg Hooper
        </span>
      </a>
    </div>
  )
}
