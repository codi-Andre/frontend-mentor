import { createFileRoute } from "@tanstack/react-router"
import styles from "./qr-code-component.module.css"
import qrCodeImg from "@/assets/images/image-qr-code.png"

export const Route = createFileRoute("/(getting-started)/qr-code-component")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.container}>
      <figure className={styles.card}>
        <img
          className={styles.image}
          src={qrCodeImg}
          height={288}
          width={288}
          alt="qr code"
        />

        <figcaption>
          <h2 className={styles.title}>
            Improve your front-end skills by building projects
          </h2>

          <p className={styles.description}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
