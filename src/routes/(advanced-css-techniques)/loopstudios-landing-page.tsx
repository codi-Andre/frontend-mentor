import { createFileRoute } from "@tanstack/react-router"
import styles from "./loopstudios-landing-page.module.css"
import logo from "@/assets/images/logo-4.svg"
import hamburgerIcon from "@/assets/icons/icon-hamburger.svg"
import closeIcon from "@/assets/icons/icon-close-2.svg"
import interactiveImage from "@/assets/images/image-interactive.jpg"
import interactiveImageDesktop from "@/assets/images/image-interactive-desktop.jpg"
import curiosityImage from "@/assets/images/image-curiosity.jpg"
import curiosityImageDesktop from "@/assets/images/image-curiosity-desktop.jpg"
import deepEarthImage from "@/assets/images/image-deep-earth.jpg"
import deepEarthImageDesktop from "@/assets/images/image-deep-earth-desktop.jpg"
import fisheyeImage from "@/assets/images/image-fisheye.jpg"
import fisheyeImageDesktop from "@/assets/images/image-fisheye-desktop.jpg"
import fromAboveImage from "@/assets/images/image-from-above.jpg"
import fromAboveImageDesktop from "@/assets/images/image-from-above-desktop.jpg"
import nightArcadeImage from "@/assets/images/image-night-arcade.jpg"
import nightArcadeImageDesktop from "@/assets/images/image-night-arcade-desktop.jpg"
import pocketBorealisImage from "@/assets/images/image-pocket-borealis.jpg"
import pocketBorealisImageDesktop from "@/assets/images/image-pocket-borealis-desktop.jpg"
import soccerTeamImage from "@/assets/images/image-soccer-team.jpg"
import soccerTeamImageDesktop from "@/assets/images/image-soccer-team-desktop.jpg"
import gridImage from "@/assets/images/image-grid.jpg"
import gridImageDesktop from "@/assets/images/image-grid-desktop.jpg"
import facebookLogo from "@/assets/icons/icon-facebook-2.svg"
import twitterLogo from "@/assets/icons/icon-twitter-2.svg"
import pinterestLogo from "@/assets/icons/icon-pinterest-2.svg"
import instagramLogo from "@/assets/icons/icon-instagram.svg"

export const Route = createFileRoute(
  "/(advanced-css-techniques)/loopstudios-landing-page"
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.hero}>
          <img height={32} width={192} src={logo} alt="loopstudios logo" />

          <button
            aria-label="open navigation menu"
            className={styles["hero__button"]}
            popoverTarget="navigation"
          >
            <img
              height={16}
              width={24}
              src={hamburgerIcon}
              alt=""
              aria-hidden
            />
          </button>

          <dialog id="navigation" className={styles.dialog} popover="manual">
            <nav className={styles["mobile-nav"]}>
              <img height={32} width={192} src={logo} alt="loopstudios logo" />

              <button
                aria-label="close navigation menu"
                className={styles["mobile-nav__button"]}
                popoverTarget="navigation"
              >
                <img
                  height={20}
                  width={20}
                  src={closeIcon}
                  alt=""
                  aria-hidden
                />
              </button>

              <ul className={styles["mobile-nav__list"]}>
                {["About", "Careers", "Events", "Products", "Support"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        className={styles["mobile-nav__link"]}
                        href="#/loopstudios-landing-page"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </dialog>

          <nav className={styles["desktop-nav"]}>
            <ul className={styles["desktop-nav__list"]}>
              {["About", "Careers", "Events", "Products", "Support"].map(
                (link) => (
                  <li key={link}>
                    <a
                      className={styles["desktop-nav__link"]}
                      href="#/loopstudios-landing-page"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <h1 className={styles["hero__title"]}>
            Immersive <br /> experiences <br /> that deliver
          </h1>
        </div>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={interactiveImageDesktop}
            />

            <img
              className={styles["article__image"]}
              height={448}
              width={654}
              src={interactiveImage}
              alt="A person using a virtual reality glasses"
            />
          </picture>

          <div className={styles["article__text-wrapper"]}>
            <h2 className={styles["article__title"]}>
              The leader in interactive VR
            </h2>

            <p className={styles["article__paragraph"]}>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </article>

        <section className={styles.creations}>
          <h2 className={styles["creations__title"]}>Our creations</h2>

          <ul className={styles["creations__list"]}>
            {[
              {
                link: "Deep earth",
                image: deepEarthImage,
                desktopImage: deepEarthImageDesktop,
              },
              {
                link: "Night arcade",
                image: nightArcadeImage,
                desktopImage: nightArcadeImageDesktop,
              },
              {
                link: "Soccer team VR",
                image: soccerTeamImage,
                desktopImage: soccerTeamImageDesktop,
              },
              {
                link: "The grid",
                image: gridImage,
                desktopImage: gridImageDesktop,
              },
              {
                link: "From up above VR",
                image: fromAboveImage,
                desktopImage: fromAboveImageDesktop,
              },
              {
                link: "Pocket borealis",
                image: pocketBorealisImage,
                desktopImage: pocketBorealisImageDesktop,
              },
              {
                link: "The curiosity",
                image: curiosityImage,
                desktopImage: curiosityImageDesktop,
              },
              {
                link: "Make it fisheye",
                image: fisheyeImage,
                desktopImage: fisheyeImageDesktop,
              },
            ].map(({ link, image, desktopImage }) => (
              <li key={link}>
                <a
                  className={styles["creations__link"]}
                  href="#/loopstudios-landing-page"
                >
                  <picture aria-hidden>
                    <source media="(min-width: 1024px)" srcSet={desktopImage} />

                    <img
                      height={120}
                      width={327}
                      className={styles["creations__image"]}
                      src={image}
                      alt=""
                    />
                  </picture>

                  <strong className={styles["creations__subtitle"]}>
                    {link}
                  </strong>
                </a>
              </li>
            ))}
          </ul>

          <button className={styles["creations__button"]}>See all</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <img
          className={styles["footer__logo"]}
          height={32}
          width={192}
          src={logo}
          alt="loopstudios logo"
        />

        <nav className={styles["footer__nav"]}>
          <ul className={styles["footer__list"]}>
            {["About", "Careers", "Events", "Products", "Support"].map(
              (link) => (
                <li key={link}>
                  <a
                    className={styles["footer__link"]}
                    href="#/loopstudios-landing-page"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className={styles["footer__social"]}>
          <ul className={styles["footer__social-list"]}>
            {[
              {
                icon: facebookLogo,
                altText: "facebook",
              },
              {
                icon: twitterLogo,
                altText: "twitter",
              },
              {
                icon: pinterestLogo,
                altText: "pinterest",
              },
              {
                icon: instagramLogo,
                altText: "instagram",
              },
            ].map(({ icon, altText }) => (
              <li key={altText}>
                <a
                  className={styles["footer__social-link"]}
                  href="#/loopstudios-landing-page"
                >
                  <img
                    className={styles["footer__icon"]}
                    height={24}
                    width={24}
                    src={icon}
                    alt={altText}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles["footer__copyright"]}>
          © 2021 Loopstudios. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
