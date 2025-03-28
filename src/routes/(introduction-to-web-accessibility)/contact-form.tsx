import { createFileRoute } from "@tanstack/react-router"
import styles from "./contact-form.module.css"
import { useEffect, useState } from "react"

export const Route = createFileRoute(
  "/(introduction-to-web-accessibility)/contact-form"
)({
  component: RouteComponent,
})

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  query: 0,
  message: "",
  consent: false,
}

function RouteComponent() {
  const [toast, setToast] = useState(false)
  const [userInput, setUserInput] = useState(initialState)
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    emptyEmail: false,
    invalidEmail: false,
    query: false,
    message: false,
    consent: false,
  })

  const validateForm = ({
    firstName,
    lastName,
    email,
    query,
    message,
    consent,
  }: typeof userInput) => {
    let isValid = true
    const REGEX_TO_VALIDATE_EMAIL =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (firstName.trim().length < 1) {
      isValid = false
      setErrors((prev) => ({ ...prev, firstName: true }))
    }

    if (lastName.trim().length < 1) {
      isValid = false
      setErrors((prev) => ({ ...prev, lastName: true }))
    }

    if (!REGEX_TO_VALIDATE_EMAIL.test(email)) {
      isValid = false
      setErrors((prev) => ({ ...prev, invalidEmail: true }))

      if (email.trim().length < 1) {
        setErrors((prev) => ({
          ...prev,
          emptyEmail: true,
          invalidEmail: false,
        }))
      }
    }

    if (query === 0) {
      isValid = false
      setErrors((prev) => ({ ...prev, query: true }))
    }

    if (message.trim().length < 1) {
      isValid = false
      setErrors((prev) => ({ ...prev, message: true }))
    }

    if (!consent) {
      isValid = false
      setErrors((prev) => ({ ...prev, consent: true }))
    }

    if (isValid) {
      setUserInput(initialState)
      setToast(true)
    }
  }

  useEffect(() => {
    let timeOutId: NodeJS.Timeout
    if (toast) {
      timeOutId = setTimeout(() => setToast(false), 1000 * 10) // 10 seconds
    }

    return () => clearTimeout(timeOutId)
  }, [toast])

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <h2>Contact Us</h2>

        <label className={styles.input}>
          First Name <span aria-hidden>*</span>
          <input
            type="text"
            autoComplete="name"
            name="first-name"
            value={userInput.firstName}
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, firstName: e.target.value }))
            }
            onBlur={() => setErrors((prev) => ({ ...prev, firstName: false }))}
            required
            aria-invalid={errors.firstName}
            aria-describedby="first-name-error"
          />
          <span
            id="first-name-error"
            className={errors.firstName ? styles.error : styles.hidden}
          >
            This field is required
          </span>
        </label>

        <label className={styles.input}>
          Last Name <span aria-hidden>*</span>
          <input
            type="text"
            autoComplete="name"
            name="last-name"
            value={userInput.lastName}
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, lastName: e.target.value }))
            }
            onBlur={() => setErrors((prev) => ({ ...prev, lastName: false }))}
            required
            aria-invalid={errors.lastName}
            aria-describedby="last-name-error"
          />
          <span
            id="last-name-error"
            className={errors.lastName ? styles.error : styles.hidden}
          >
            This field is required
          </span>
        </label>

        <label className={styles.input}>
          Email Address <span aria-hidden>*</span>
          <input
            type="email"
            autoComplete="email"
            name="email"
            value={userInput.email}
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, email: e.target.value }))
            }
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                emptyEmail: false,
                invalidEmail: false,
              }))
            }
            required
            aria-invalid={errors.invalidEmail || errors.emptyEmail}
            aria-describedby="email-error"
          />
          <span
            className={
              errors.invalidEmail || errors.emptyEmail
                ? styles.error
                : styles.hidden
            }
            id="email-error"
          >
            <span className={errors.invalidEmail ? "" : styles.hidden}>
              Please enter a valid email address
            </span>
            <span className={errors.emptyEmail ? "" : styles.hidden}>
              This field is required
            </span>
          </span>
        </label>

        <fieldset className={styles.fieldset}>
          <legend>
            Query Type <span aria-hidden>*</span>
          </legend>

          <label>
            <input
              className={styles["sr-only"]}
              type="radio"
              name="query"
              checked={userInput.query === 1}
              onChange={() => setUserInput((prev) => ({ ...prev, query: 1 }))}
              onBlur={() => setErrors((prev) => ({ ...prev, query: false }))}
              required
              aria-invalid={errors.query}
              aria-describedby="query-error"
            />
            General Enquiry
          </label>

          <label>
            <input
              className={styles["sr-only"]}
              type="radio"
              name="query"
              checked={userInput.query === 2}
              onChange={() => setUserInput((prev) => ({ ...prev, query: 2 }))}
              onBlur={() => setErrors((prev) => ({ ...prev, query: false }))}
              required
              aria-invalid={errors.query}
              aria-describedby="query-error"
            />
            Support Request
          </label>

          <span
            id="query-error"
            className={errors.query ? styles.error : styles.hidden}
          >
            Please select a query type
          </span>
        </fieldset>

        <label className={styles.textarea}>
          Message <span aria-hidden>*</span>
          <textarea
            rows={3}
            name="message"
            value={userInput.message}
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, message: e.target.value }))
            }
            onBlur={() => setErrors((prev) => ({ ...prev, message: false }))}
            required
            aria-invalid={errors.message}
            aria-describedby="message-error"
          />
          <span
            id="message-error"
            className={errors.message ? styles.error : styles.hidden}
          >
            This field is required
          </span>
        </label>

        <label className={styles.checkbox}>
          <input
            className={styles["sr-only"]}
            type="checkbox"
            name="consent"
            checked={userInput.consent}
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, consent: e.target.checked }))
            }
            onBlur={() => setErrors((prev) => ({ ...prev, consent: false }))}
            required
            aria-invalid={errors.consent}
            aria-describedby="consent-error"
          />
          <span>
            <span>
              I consent to being contacted by the team{" "}
              <span aria-hidden>*</span>
            </span>
          </span>
          <span
            id="consent-error"
            className={errors.consent ? styles.error : styles.hidden}
          >
            To submit this form, please consent to being contacted
          </span>
        </label>

        <button
          className={styles.button}
          type="button"
          onClick={() => validateForm(userInput)}
        >
          Submit
        </button>
      </form>

      <div
        role="alert"
        aria-live="assertive"
        className={toast ? styles.toast : styles.hidden}
      >
        <h3>Message Sent!</h3>

        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
    </main>
  )
}
