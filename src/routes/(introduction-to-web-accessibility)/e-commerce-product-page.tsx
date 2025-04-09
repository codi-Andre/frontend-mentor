import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"
import styles from "./e-commerce-product-page.module.css"
import logo from "@/assets/images/logo-3.svg"
import closeIcon from "@/assets/icons/icon-close.svg"
import menuIcon from "@/assets/icons/icon-menu-2.svg"
import cartIcon from "@/assets/icons/icon-cart-2.svg"
import trashIcon from "@/assets/icons/icon-delete.svg"
import prevIcon from "@/assets/icons/icon-previous.svg"
import nextIcon from "@/assets/icons/icon-next.svg"
import plusIcon from "@/assets/icons/icon-plus-2.svg"
import minusIcon from "@/assets/icons/icon-minus-2.svg"
import avatar from "@/assets/images/image-avatar.png"
import product1 from "@/assets/images/image-product-1.jpg"
import product2 from "@/assets/images/image-product-2.jpg"
import product3 from "@/assets/images/image-product-3.jpg"
import product4 from "@/assets/images/image-product-4.jpg"
import thumbnail1 from "@/assets/images/image-product-1-thumbnail.jpg"
import thumbnail2 from "@/assets/images/image-product-2-thumbnail.jpg"
import thumbnail3 from "@/assets/images/image-product-3-thumbnail.jpg"
import thumbnail4 from "@/assets/images/image-product-4-thumbnail.jpg"

const images = [
  { imageUrl: product1, altText: "sneakers front view" },
  { imageUrl: product2, altText: "sneakers back view" },
  { imageUrl: product3, altText: "sneakers right side" },
  { imageUrl: product4, altText: "sneakers left side" },
]

export const Route = createFileRoute(
  "/(introduction-to-web-accessibility)/e-commerce-product-page"
)({
  component: RouteComponent,
})

function RouteComponent() {
  const mobileNav = useRef<HTMLDialogElement>(null)
  const lightBox = useRef<HTMLDialogElement>(null)

  const [cartQuantity, setCartQuantity] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [image, setImage] = useState(0)

  const openDialog = (ref: React.RefObject<HTMLDialogElement | null>) =>
    ref.current?.showModal()
  const closeDialog = (ref: React.RefObject<HTMLDialogElement | null>) =>
    ref.current?.close()
  const prevImage = () => {
    if (image > 0) {
      setImage((prev) => prev - 1)
    }
  }
  const nextImage = () => {
    if (image < images.length - 1) {
      setImage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileNav.current === event.target) {
        closeDialog(mobileNav)
      }
    }

    mobileNav.current?.addEventListener("click", handleClickOutside)

    return () =>
      mobileNav.current?.removeEventListener("click", handleClickOutside)
  }, [mobileNav])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          aria-label="open navigation menu"
          className={`${styles.button} ${styles["button--icon"]}`}
          onClick={() => openDialog(mobileNav)}
        >
          <img height={15} width={16} src={menuIcon} alt="" aria-hidden />
        </button>

        <dialog className={styles["mobile-nav"]} ref={mobileNav}>
          <nav>
            <button
              aria-label="close navigation menu"
              className={`${styles.button} ${styles["button--icon"]}`}
              onClick={() => closeDialog(mobileNav)}
            >
              <img src={closeIcon} alt="" aria-hidden />
            </button>

            <ul>
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href="#/e-commerce-product-page">{link}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </dialog>

        <img
          className={styles.logo}
          height={20}
          width={138}
          src={logo}
          alt="sneakers logo"
        />

        <nav className={styles["desktop-nav"]}>
          <ul>
            {["Collections", "Men", "Women", "About", "Contact"].map((link) => (
              <li key={link}>
                <a href="#/e-commerce-product-page">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles["cart-wrapper"]}>
          <small className={styles["cart-quantity"]} aria-live="polite">
            {cartQuantity}
            <span className={styles["sr-only"]}>
              {cartQuantity === 1 ? "item in the cart" : "items in the cart"}
            </span>
          </small>

          <button
            className={`${styles.button} ${styles["button--icon"]}`}
            aria-label="open cart"
            popoverTarget="cart"
            popoverTargetAction="toggle"
          >
            <img height={20} width={22} src={cartIcon} alt="" aria-hidden />
          </button>

          <dialog id="cart" className={styles.cart} popover="auto">
            <h2>Cart</h2>

            <ul>
              <li
                className={
                  cartQuantity > 0 ? styles["cart-item"] : styles.hidden
                }
              >
                <img height={48} width={48} src={thumbnail1} alt="" />

                <p>
                  Fall Limited Edition Sneakers <br /> $125.00 x {cartQuantity}{" "}
                  <strong>${125 * cartQuantity}.00</strong>
                </p>

                <button
                  aria-label="remove from the cart"
                  className={`${styles.button} ${styles["button--icon"]}`}
                  onClick={() => setCartQuantity(0)}
                >
                  <img
                    height={16}
                    width={14}
                    src={trashIcon}
                    alt=""
                    aria-hidden
                  />
                </button>
              </li>

              <li
                className={
                  cartQuantity > 0 ? styles.hidden : styles["empty-cart"]
                }
              >
                Your cart is empty
              </li>
            </ul>

            <button
              className={
                cartQuantity > 0
                  ? `${styles.button} ${styles["button--primary"]} ${styles["button--large"]}`
                  : styles.hidden
              }
            >
              Checkout
            </button>
          </dialog>
        </div>

        <button
          className={`${styles.button} ${styles["button--icon"]}`}
          aria-label="open profile menu"
        >
          <img height={24} width={24} src={avatar} alt="" aria-hidden />
        </button>
      </header>

      <main className={styles.main}>
        <h1 className={styles["sr-only"]}>Product Page</h1>

        <section>
          <h2 className={styles["sr-only"]}>Product gallery</h2>

          <div className={styles["mobile-gallery"]}>
            <img
              height={360}
              width={360}
              src={images[image].imageUrl}
              alt={images[image].altText}
            />

            <button
              aria-label="previous image"
              className={`${styles.button} ${styles["button--icon"]} ${styles["prev-button"]}`}
              onClick={prevImage}
            >
              <img height={18} width={12} src={prevIcon} alt="" aria-hidden />
            </button>

            <button
              aria-label="next image"
              className={`${styles.button} ${styles["button--icon"]} ${styles["next-button"]}`}
              onClick={nextImage}
            >
              <img height={18} width={13} src={nextIcon} alt="" aria-hidden />
            </button>
          </div>

          <div className={styles["desktop-gallery"]}>
            <input
              height={360}
              width={360}
              type="image"
              src={images[image].imageUrl}
              alt="open lightbox"
              onClick={() => openDialog(lightBox)}
            />

            <ul className={styles.thumbnails}>
              {[thumbnail1, thumbnail2, thumbnail3, thumbnail4].map(
                (thumbnail, index) => (
                  <li key={thumbnail}>
                    <label className={styles.thumbnail}>
                      <img
                        height={72}
                        width={72}
                        src={thumbnail}
                        alt={images[index].altText}
                      />
                      <span className={styles["sr-only"]}>
                        selected to show
                      </span>
                      <input
                        className={styles["sr-only"]}
                        type="radio"
                        name="thumbnail"
                        checked={index === image}
                        onChange={() => setImage(index)}
                      />
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>

          <dialog ref={lightBox} className={styles["light-box"]}>
            <button
              aria-label="close image gallery"
              className={`${styles.button} ${styles["button--icon"]} ${styles["close-button"]}`}
              onClick={() => closeDialog(lightBox)}
            >
              <img height={21} width={20} src={closeIcon} alt="" aria-hidden />
            </button>

            <img
              height={480}
              width={480}
              src={images[image].imageUrl}
              alt={images[image].altText}
            />

            <button
              aria-label="previous image"
              className={`${styles.button} ${styles["button--icon"]} ${styles["prev-button"]}`}
              onClick={prevImage}
            >
              <img height={18} width={12} src={prevIcon} alt="" aria-hidden />
            </button>

            <button
              aria-label="next image"
              className={`${styles.button} ${styles["button--icon"]} ${styles["next-button"]}`}
              onClick={nextImage}
            >
              <img height={18} width={13} src={nextIcon} alt="" aria-hidden />
            </button>

            <ul>
              {[thumbnail1, thumbnail2, thumbnail3, thumbnail4].map(
                (thumbnail, index) => (
                  <li key={thumbnail}>
                    <label className={styles.thumbnail}>
                      <img
                        height={96}
                        width={96}
                        src={thumbnail}
                        alt={images[index].altText}
                      />
                      <span className={styles["sr-only"]}>
                        selected to show
                      </span>
                      <input
                        className={styles["sr-only"]}
                        type="radio"
                        name="lightbox"
                        checked={index === image}
                        onChange={() => setImage(index)}
                      />
                    </label>
                  </li>
                )
              )}
            </ul>
          </dialog>
        </section>

        <section className={styles.product}>
          <p className={styles.company}>Sneaker Company</p>

          <h2>Fall Limited Edition Sneakers</h2>

          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <p className={styles.price}>
            $125.00
            <span>50%</span>
            <del>$250.00</del>
          </p>

          <div className={styles["buy-panel"]}>
            <div className={styles["quantity-panel"]}>
              <button
                aria-label="decrease quantity "
                className={`${styles.button} ${styles["button--icon"]}`}
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity((prev) => prev - 1)
                  }
                }}
              >
                <img height={4} width={12} src={minusIcon} alt="" aria-hidden />
              </button>

              <p>
                {quantity}{" "}
                <span className={styles["sr-only"]} aria-live="polite">
                  {quantity === 1 ? "item" : "items"} to add to the cart
                </span>
              </p>

              <button
                aria-label="increase quantity of items to add to the cart"
                className={`${styles.button} ${styles["button--icon"]}`}
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <img height={12} width={12} src={plusIcon} alt="" aria-hidden />
              </button>
            </div>

            <button
              className={`${styles.button} ${styles["button--primary"]} ${styles["button--large"]}`}
              onClick={() => setCartQuantity((prev) => prev + quantity)}
            >
              <img height={20} width={22} src={cartIcon} alt="" aria-hidden />
              Add to cart
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
