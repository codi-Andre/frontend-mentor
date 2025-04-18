import { createFileRoute } from "@tanstack/react-router"
import styles from "./faq-accordion.module.css"
import starIcon from "@/assets/icons/icon-star-2.svg"

export const Route = createFileRoute(
  "/(introduction-to-web-accessibility)/faq-accordion"
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <h2 className={styles.title}>
          <img src={starIcon} alt="" aria-hidden="true" />
          FAQs
        </h2>

        <details className={styles.card} name="accordion">
          <summary>What is Frontend Mentor, and how will it help me?</summary>

          <p>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </p>
        </details>

        <details className={styles.card} name="accordion">
          <summary>Is Frontend Mentor free?</summary>

          <p>
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </p>
        </details>

        <details className={styles.card} name="accordion">
          <summary>Can I use Frontend Mentor projects in my portfolio?</summary>

          <p>
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!
          </p>
        </details>

        <details className={styles.card} name="accordion">
          <summary>
            How can I get help if I'm stuck on a Frontend Mentor challenge?
          </summary>

          <p>
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members.
          </p>
        </details>
      </article>
    </main>
  )
}
