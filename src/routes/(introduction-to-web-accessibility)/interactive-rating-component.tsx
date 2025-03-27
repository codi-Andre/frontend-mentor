import { createFileRoute } from "@tanstack/react-router"
import styles from "./interactive-rating-component.module.css"
import { useActionState } from "react"
import starIcon from "@/assets/icons/icon-star.svg"
import illustration from "@/assets/images/illustration-thank-you.svg"

export const Route = createFileRoute(
  "/(introduction-to-web-accessibility)/interactive-rating-component"
)({
  component: RouteComponent,
})

function rate(prevRating: number, formData: FormData) {
  const rating = formData.get("rating") as string | null

  if (rating) {
    return parseInt(rating, 10)
  }
  return prevRating
}

function RouteComponent() {
  const [rating, handleSubmit, isPending] = useActionState(rate, 0)

  return (
    <div className={styles.container}>
      <form
        className={rating === 0 ? styles.card : styles.hidden}
        action={handleSubmit}
      >
        <img src={starIcon} height={40} width={40} alt="star" />

        <h2>How did we do?</h2>

        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <fieldset>
          <label className={styles.rating}>
            1
            <input type="radio" name="rating" value={1} />
          </label>

          <label className={styles.rating}>
            2
            <input type="radio" name="rating" value={2} />
          </label>

          <label className={styles.rating}>
            3
            <input type="radio" name="rating" value={3} />
          </label>

          <label className={styles.rating}>
            4
            <input type="radio" name="rating" value={4} />
          </label>

          <label className={styles.rating}>
            5
            <input type="radio" name="rating" value={5} />
          </label>
        </fieldset>

        <button disabled={isPending} type="submit">
          Submit
        </button>
      </form>

      <article className={rating > 0 ? styles.card : styles.hidden}>
        <img src={illustration} alt="" />

        <p autoFocus>You selected {rating} out of 5</p>

        <h2>Thank you!</h2>

        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </article>
    </div>
  )
}
