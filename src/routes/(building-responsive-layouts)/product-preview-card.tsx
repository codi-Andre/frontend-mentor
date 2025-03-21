import { createFileRoute } from "@tanstack/react-router"
import styles from "./product-preview-card.module.css"
import imgMobile from "@/assets/images/image-product-mobile.jpg"
import imgDesktop from "@/assets/images/image-product-desktop.jpg"
import icon from "@/assets/icons/icon-cart.svg"

export const Route = createFileRoute(
  "/(building-responsive-layouts)/product-preview-card"
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <picture className={styles.picture}>
          <source media="(min-width: 640px)" srcSet={imgDesktop} />
          <img src={imgMobile} alt="perfume bottle" />
        </picture>

        <div className={styles.content}>
          <strong className={styles.category}>Perfume</strong>

          <h2 className={styles.title}>Gabrielle Essence Eau De Parfum</h2>

          <p className={styles.description}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <p className={styles.price}>
            <span>$149.99</span>
            <del>$169.99</del>
          </p>

          <button className={styles.button}>
            <img src={icon} alt="" />
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  )
}
