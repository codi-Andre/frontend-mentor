import { createFileRoute } from "@tanstack/react-router"
import styles from "./four-card-feature-section.module.css"
import supervisor from "@/assets/icons/icon-supervisor.svg"
import teamBuilder from "@/assets/icons/icon-team-builder.svg"
import calculator from "@/assets/icons/icon-calculator.svg"
import karma from "@/assets/icons/icon-karma.svg"

export const Route = createFileRoute(
  "/(building-responsive-layouts)/four-card-feature-section"
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <h2 className={styles.title}>
          Reliable, efficient delivery <br />
          Powered by Technology
        </h2>

        <p className={styles.description}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>

        <section className={styles.card}>
          <h3>Supervisor</h3>

          <p>Monitors activity to identify project roadblocks</p>

          <img src={supervisor} alt="" />
        </section>

        <section className={styles.card}>
          <h3>Team Builder</h3>

          <p>
            Scans our talent network to create the optimal team for your project
          </p>

          <img src={teamBuilder} alt="" />
        </section>

        <section className={styles.card}>
          <h3>Karma</h3>

          <p>Regularly evaluates our talent to ensure quality</p>

          <img src={karma} alt="" />
        </section>

        <section className={styles.card}>
          <h3>Calculator</h3>

          <p>
            Uses data from past projects to provide better delivery estimates
          </p>

          <img src={calculator} alt="" />
        </section>
      </article>
    </div>
  )
}
