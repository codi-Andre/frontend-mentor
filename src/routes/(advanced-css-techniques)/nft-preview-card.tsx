import { createFileRoute } from "@tanstack/react-router"
import styles from "./nft-preview-card.module.css"
import equilibriumImage from "@/assets/images/image-equilibrium.jpg"
import avatar from "@/assets/images/image-avatar-2.png"
import clockIcon from "@/assets/icons/icon-clock.svg"
import ethereumIcon from "@/assets/icons/icon-ethereum.svg"
import viewIcon from "@/assets/icons/icon-view.svg"

export const Route = createFileRoute(
  "/(advanced-css-techniques)/nft-preview-card"
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <a className={styles.image} href="#/nft-preview-card">
          <img
            height={292}
            width={292}
            className={styles["image__background"]}
            src={equilibriumImage}
            alt="A glass cube stand in one of its edges"
          />

          <img
            height={48}
            width={48}
            className={styles["image__foreground"]}
            src={viewIcon}
            alt="eye ball icon"
          />
        </a>

        <h2 className={styles["card__title"]}>
          <a href="#/nft-preview-card">Equilibrium #3429</a>
        </h2>

        <p className={styles["card__paragraph"]}>
          Our Equilibrium collection promotes balance and calm.
        </p>

        <p className={styles.crypto}>
          <img
            height={18}
            width={11}
            className={styles["crypto__symbol"]}
            src={ethereumIcon}
            alt="ethereum symbol"
          />
          <strong className={styles["crypto__price"]}>0.041 ETH</strong>
          <img
            height={17}
            width={17}
            className={styles["crypto__time"]}
            src={clockIcon}
            alt="clock icon"
          />
          3 days left
        </p>

        <hr className={styles["card__line"]} />

        <p className={styles.profile}>
          <img
            height={32}
            width={32}
            className={styles["profile__avatar"]}
            src={avatar}
            alt="Jules Wyvern avatar"
          />
          <span>Creation of </span>

          <a className={styles["profile__autor"]} href="#/nft-preview-card">
            Jules Wyvern
          </a>
        </p>
      </article>
    </main>
  )
}
