import { createFileRoute } from "@tanstack/react-router"
import styles from "./article-preview-component.module.css"
import avatar from "@/assets/images/avatar-michelle.jpg"
import drawers from "@/assets/images/drawers.jpg"
import facebook from "@/assets/icons/icon-facebook.svg"
import pinterest from "@/assets/icons/icon-pinterest.svg"
import twitter from "@/assets/icons/icon-twitter.svg"
import { useRef } from "react"

export const Route = createFileRoute(
  "/(javaScript-fundamentals)/article-preview-component"
)({
  component: RouteComponent,
})

function RouteComponent() {
  const dialogElement = useRef<HTMLDialogElement>(null)
  const toggleDialog = () => {
    const isOpen = dialogElement.current?.hasAttribute("open")

    if (isOpen) {
      dialogElement.current?.close()
    } else {
      dialogElement.current?.show()
    }
  }

  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <img className={styles.image} src={drawers} alt="" />

        <h2 className={styles.title}>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>

        <p className={styles.description}>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <div className={styles.profile}>
          <img src={avatar} alt="avatar" />

          <p>
            Michelle Appleton <br />
            <time dateTime="2020-05-28">28 Jun 2020</time>
          </p>

          <button
            className={styles.button}
            aria-label="open share menu"
            onClick={toggleDialog}
          >
            <svg
              fill="#ffffff"
              width="64px"
              height="64px"
              viewBox="0 -2.5 29 29"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m.408 22.528c1.873-6.758 5.672-11.533 11.216-14.094 1.678-.752 3.633-1.353 5.673-1.709l.151-.022c.462 0 .464-.014.464-3.352v-3.351l11.446 11.446-11.446 11.446v-6.702h-1.392c-3.787.088-7.34 1.007-10.51 2.58l.145-.065c-1.836 1.072-3.41 2.347-4.767 3.825l-.013.015-1.374 1.454.408-1.472z"></path>
              </g>
            </svg>
          </button>

          <dialog ref={dialogElement} className={styles.dialog}>
            <span>SHARE</span>

            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>

            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>

            <a
              className={styles.link}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pinterest} alt="" />
            </a>

            <button
              className={styles.button}
              aria-label="close share menu"
              onClick={toggleDialog}
            >
              <svg
                fill="#ffffff"
                width="64px"
                height="64px"
                viewBox="0 -2.5 29 29"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m.408 22.528c1.873-6.758 5.672-11.533 11.216-14.094 1.678-.752 3.633-1.353 5.673-1.709l.151-.022c.462 0 .464-.014.464-3.352v-3.351l11.446 11.446-11.446 11.446v-6.702h-1.392c-3.787.088-7.34 1.007-10.51 2.58l.145-.065c-1.836 1.072-3.41 2.347-4.767 3.825l-.013.015-1.374 1.454.408-1.472z"></path>
                </g>
              </svg>
            </button>
          </dialog>
        </div>
      </article>
    </div>
  )
}
