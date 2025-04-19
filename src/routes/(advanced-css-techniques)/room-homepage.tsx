import { createFileRoute } from "@tanstack/react-router"
import styles from "./room-homepage.module.css"
import logo from "@/assets/images/logo-5.svg"
import menuIcon from "@/assets/icons/icon-hamburger-2.svg"
import closeIcon from "@/assets/icons/icon-close-3.svg"
import leftArrowIcon from "@/assets/icons/icon-angle-left.svg"
import rightArrowIcon from "@/assets/icons/icon-angle-right.svg"
import desktopHeroImage1 from "@/assets/images/desktop-image-hero-1.jpg"
import desktopHeroImage2 from "@/assets/images/desktop-image-hero-2.jpg"
import desktopHeroImage3 from "@/assets/images/desktop-image-hero-3.jpg"
import mobileHeroImage1 from "@/assets/images/mobile-image-hero-1.jpg"
import mobileHeroImage2 from "@/assets/images/mobile-image-hero-2.jpg"
import mobileHeroImage3 from "@/assets/images/mobile-image-hero-3.jpg"
import { useState } from "react"

const navigation = ["Home", "Shop", "About", "Contact"]
const images = [
  {
    mobile: mobileHeroImage1,
    desktop: desktopHeroImage1,
    altText: "A table with plant and white chairs",
  },
  {
    mobile: mobileHeroImage2,
    desktop: desktopHeroImage2,
    altText: "Three chair, one white, one yellow and one gray",
  },
  {
    mobile: mobileHeroImage3,
    desktop: desktopHeroImage3,
    altText: "A black chair",
  },
]

export const Route = createFileRoute(
  "/(advanced-css-techniques)/room-homepage"
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [slide, setSlide] = useState(0)

  const previousSlide = () => {
    if (slide > 0) {
      setSlide((prev) => prev - 1)
    }
  }
  const nextSlide = () => {
    if (slide < images.length - 1) {
      setSlide((prev) => prev + 1)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          aria-label="open navigation menu"
          className={styles["header__button"]}
          popoverTarget="mobile-nav"
        >
          <img height={14} width={20} src={menuIcon} alt="" aria-hidden />
        </button>

        <dialog id="mobile-nav" className={styles.dialog} popover="auto">
          <nav className={styles["mobile-nav"]}>
            <button
              aria-label="close navigation menu"
              className={styles["mobile-nav__button"]}
              popoverTarget="mobile-nav"
            >
              <img height={16} width={16} src={closeIcon} alt="" aria-hidden />
            </button>

            <ul className={styles["mobile-nav__list"]}>
              {navigation.map((link) => (
                <li key={link}>
                  <a
                    className={styles["mobile-nav__link"]}
                    href="#/room-homepage"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>

        <img
          className={styles.logo}
          height={14}
          width={62}
          src={logo}
          alt="room logo"
        />

        <nav className={styles["desktop-nav"]}>
          <ul className={styles["desktop-nav__list"]}>
            {navigation.map((link) => (
              <li key={link}>
                <a
                  className={styles["desktop-nav__link"]}
                  href="#/room-homepage"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <picture className={styles.slide}>
          <source media="(min-width: 1024px)" srcSet={images[slide].desktop} />

          <img
            className={styles["slide__image"]}
            height={360}
            width={375}
            src={images[slide].mobile}
            alt={images[slide].altText}
          />
        </picture>

        <button
          aria-label="previous slide"
          className={styles["slide__prev-button"]}
          onClick={previousSlide}
        >
          <img height={24} width={14} src={leftArrowIcon} alt="" aria-hidden />
        </button>

        <button
          aria-label="next slide"
          className={styles["slide__next-button"]}
          onClick={nextSlide}
        >
          <img height={24} width={14} src={rightArrowIcon} alt="" aria-hidden />
        </button>
      </main>
    </div>
  )
}
