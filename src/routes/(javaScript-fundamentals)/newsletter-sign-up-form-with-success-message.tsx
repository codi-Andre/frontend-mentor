import { createFileRoute } from "@tanstack/react-router"
import styles from "./newsletter-sign-up-form-with-success-message.module.css"
import { FormEvent, useRef, useState } from "react"
import illustrationMobile from "@/assets/images/illustration-sign-up-mobile.svg"
import illustrationDesktop from "@/assets/images/illustration-sign-up-desktop.svg"
import successIcon from "@/assets/icons/icon-success.svg"

export const Route = createFileRoute(
  "/(javaScript-fundamentals)/newsletter-sign-up-form-with-success-message"
)({
  component: RouteComponent,
})

function RouteComponent() {
  const dialogElement = useRef<HTMLDialogElement>(null)
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const REGEX_TO_VALIDATE_EMAIL =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (REGEX_TO_VALIDATE_EMAIL.test(email)) {
      dialogElement.current?.showModal()
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <picture className={styles.image}>
          <source media="(min-width: 768px)" srcSet={illustrationDesktop} />
          <img src={illustrationMobile} alt="" />
        </picture>

        <h2 className={styles.title}>Stay updated!</h2>

        <p className={styles.description}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className={styles.list}>
          <li>Product discovery and building what matters</li>

          <li>Measuring to ensure updates are a success</li>

          <li>And much more!</li>
        </ul>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Email address{" "}
            <span className={`${error ? styles.error : styles.hidden}`}>
              Valid email required
            </span>
            <input
              value={email}
              onChange={(e) => {
                if (error) {
                  setError(false)
                }
                setEmail(e.target.value)
              }}
              type="email"
              placeholder="email@company.com"
            />
          </label>

          <button type="submit" className={styles.button}>
            Subscribe to monthly newsletter
          </button>
        </form>

        <dialog className={styles.dialog} ref={dialogElement}>
          <img src={successIcon} alt="" />

          <h2 className={styles.title}>Thanks for subscribing!</h2>

          <p className={styles.description}>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>

          <button
            className={styles.button}
            onClick={() => {
              dialogElement.current?.close()
              setEmail("")
            }}
          >
            Dismiss message
          </button>
        </dialog>
      </article>
    </div>
  )
}
