import { createFileRoute } from "@tanstack/react-router"
import styles from "./room-homepage.module.css"
import logo from "@/assets/images/logo-5.svg"
import menuIcon from "@/assets/icons/icon-hamburger-2.svg"
import closeIcon from "@/assets/icons/icon-close-3.svg"
import leftArrowIcon from "@/assets/icons/icon-angle-left.svg"
import rightArrowIcon from "@/assets/icons/icon-angle-right.svg"
import arrowIcon from "@/assets/icons/icon-arrow.svg"
import desktopHeroImage1 from "@/assets/images/desktop-image-hero-1.jpg"
import desktopHeroImage2 from "@/assets/images/desktop-image-hero-2.jpg"
import desktopHeroImage3 from "@/assets/images/desktop-image-hero-3.jpg"
import mobileHeroImage1 from "@/assets/images/mobile-image-hero-1.jpg"
import mobileHeroImage2 from "@/assets/images/mobile-image-hero-2.jpg"
import mobileHeroImage3 from "@/assets/images/mobile-image-hero-3.jpg"
import darkAboutImage from "@/assets/images/image-about-dark.jpg"
import lightAboutImage from "@/assets/images/image-about-light.jpg"
import { useState } from "react"

const navigation = ["Home", "Shop", "About", "Contact"]
const slides = [
  {
    mobile: mobileHeroImage1,
    desktop: desktopHeroImage1,
    altText: "A table with plant and white chairs",
    title: "Discover innovative ways to decorate",
    paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    mobile: mobileHeroImage2,
    desktop: desktopHeroImage2,
    altText: "Three chair, one white, one yellow and one gray",
    title: "We are available all across the globe",
    paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    mobile: mobileHeroImage3,
    desktop: desktopHeroImage3,
    altText: "A black chair",
    title: "Manufactured with the best materials",
    paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
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
    if (slide < slides.length - 1) {
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
        <section className={styles.hero}>
          <div className={styles["hero__image"]}>
            <picture className={styles.slide}>
              <source
                media="(min-width: 640px)"
                srcSet={slides[slide].desktop}
              />

              <img
                className={styles["slide__image"]}
                height={360}
                width={375}
                src={slides[slide].mobile}
                alt={slides[slide].altText}
              />
            </picture>

            <button
              aria-label="previous slide"
              className={styles["slide__prev-button"]}
              onClick={previousSlide}
            >
              <img
                height={24}
                width={14}
                src={leftArrowIcon}
                alt=""
                aria-hidden
              />
            </button>

            <button
              aria-label="next slide"
              className={styles["slide__next-button"]}
              onClick={nextSlide}
            >
              <img
                height={24}
                width={14}
                src={rightArrowIcon}
                alt=""
                aria-hidden
              />
            </button>
          </div>

          <div className={styles["hero__content"]}>
            <h2 className={styles["hero__title"]}>{slides[slide].title}</h2>

            <p className={styles["hero__paragraph"]}>
              {slides[slide].paragraph}
            </p>

            <a className={styles["hero__link"]} href="#/room-homepage">
              Shop now
              <img height={12} width={40} src={arrowIcon} alt="" aria-hidden />
            </a>
          </div>
        </section>

        <section className={styles.about}>
          <img
            className={styles["about__dark-image"]}
            height={266}
            width={420}
            src={darkAboutImage}
            alt="dark living room with furniture"
          />

          <div className={styles["about__content"]}>
            <h2 className={styles["about__title"]}>About our furniture</h2>

            <p className={styles["about__paragraph"]}>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>

          <img
            className={styles["about__light-image"]}
            height={266}
            width={440}
            src={lightAboutImage}
            alt="A white chair in a white room with sunlight"
          />
        </section>
      </main>
    </div>
  )
}
