import { createFileRoute } from "@tanstack/react-router"
import styles from "./news-homepage.module.css"
import logo from "@/assets/images/logo-2.svg"
import mobileWeb3Image from "@/assets/images/image-web-3-mobile.jpg"
import desktopWeb3Image from "@/assets/images/image-web-3-desktop.jpg"
import retroPcsImage from "@/assets/images/image-retro-pcs.jpg"
import gamingGrowthImage from "@/assets/images/image-gaming-growth.jpg"
import topLaptopsImage from "@/assets/images/image-top-laptops.jpg"
import { useEffect, useRef } from "react"
import menuIcon from "@/assets/icons/icon-menu.svg"
import closeIcon from "@/assets/icons/icon-menu-close.svg"
import { useIsMobile } from "@/hooks/use-is-mobile"

export const Route = createFileRoute(
  "/(introduction-to-web-accessibility)/news-homepage"
)({
  component: RouteComponent,
})

function RouteComponent() {
  const isMobile = useIsMobile()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openDialog = () => dialogRef.current?.showModal()
  const closeDialog = () => dialogRef.current?.close()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current === event.target) {
        closeDialog()
      }
    }

    dialogRef.current?.close()

    if (isMobile) {
      dialogRef.current?.addEventListener("click", handleClickOutside)
    } else {
      dialogRef.current?.show()
    }

    return () =>
      dialogRef.current?.removeEventListener("click", handleClickOutside)
  }, [dialogRef, isMobile])

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <img src={logo} alt="logo: letter W in uppercase and a dot" />

        <button
          aria-label="open navigation"
          className={styles["open-menu-button"]}
          onClick={openDialog}
        >
          <img aria-hidden src={menuIcon} alt="" />
        </button>

        <dialog className={styles.dialog} ref={dialogRef}>
          <button
            aria-label="close navigation"
            className={styles["close-menu-button"]}
            onClick={closeDialog}
          >
            <img aria-hidden src={closeIcon} alt="" />
          </button>

          <nav className={styles.nav}>
            <ul>
              {["Home", "New", "Popular", "Trending", "Categories"].map(
                (link) => (
                  <li key={link}>
                    <a href="#/news-homepage">{link}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </dialog>

        <section id="Home" className={styles.home}>
          <picture className={styles.picture}>
            <source media="(min-width: 640px)" srcSet={desktopWeb3Image} />

            <img src={mobileWeb3Image} alt="" />
          </picture>

          <h2>The Bright Future of Web 3.0?</h2>

          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <a href="#/news-homepage">Read more</a>
        </section>

        <section id="New" className={styles.new}>
          <h2>New</h2>

          <ul>
            {[
              {
                title: "Hydrogen VS Electric Cars",
                description: "Will hydrogen-fueled cars ever catch up to EVs?",
              },
              {
                title: "The Downsides of AI Artistry",
                description:
                  "What are the possible adverse effects of on-demand AI image generation?",
              },
              {
                title: "Is VC Funding Drying Up?",
                description:
                  "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
              },
            ].map(({ title, description }) => (
              <li key={title}>
                <a href="#/news-homepage">
                  <h3>{title}</h3>

                  <p>{description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="Trending" className={styles.trending}>
          <h2 className={styles["sr-only"]}>Trending</h2>

          <ol>
            {[
              {
                trending: "01",
                title: "Reviving Retro PCs",
                description:
                  "What happens when old PCs are given modern upgrades?",
                image: retroPcsImage,
                altText: "a bunch of old electronic devices",
              },
              {
                trending: "02",
                title: "Top 10 Laptops of 2022",
                description: "Our best picks for various needs and budgets.",
                image: topLaptopsImage,
                altText: "a close view of a laptop keyboard",
              },
              {
                trending: "03",
                title: "The Growth of Gaming",
                description:
                  "How the pandemic has sparked fresh opportunities.",
                image: gamingGrowthImage,
                altText: "a hand throwing a PlayStation controller in the air",
              },
            ].map(({ trending, title, description, image, altText }) => (
              <li key={trending}>
                <a href="#/news-homepage">
                  <img src={image} alt={altText} />

                  <h3>
                    {trending} <br />
                    {title}
                  </h3>

                  <p>{description}</p>
                </a>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  )
}
