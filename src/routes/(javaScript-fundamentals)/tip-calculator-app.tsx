import { createFileRoute } from "@tanstack/react-router"
import styles from "./tip-calculator-app.module.css"
import logo from "@/assets/images/logo.svg"
import dollarIcon from "@/assets/icons/icon-dollar.svg"
import personIcon from "@/assets/icons/icon-person.svg"
import { useState } from "react"
import { formatToCurrency } from "@/utils/formatToCurrency"

export const Route = createFileRoute(
  "/(javaScript-fundamentals)/tip-calculator-app"
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [customTip, setCustomTip] = useState(0)
  const [people, setPeople] = useState("")

  const numberOfPeople = parseInt(people, 10)
  const peopleIsZero = Number.isNaN(numberOfPeople) || numberOfPeople < 1
  const selectTip = () => (tip > 0 && customTip === 0 ? tip : customTip)
  const calculateTip = () => bill * (selectTip() / 100)
  const calculateTotal = () => bill + calculateTip()
  const updateTip = (value: number) => {
    setCustomTip(0)
    setTip(value)
  }
  const updateCustomTip = (value: number) => {
    setTip(0)

    if (Number.isNaN(value)) {
      setCustomTip(0)
      return
    }
    setCustomTip(value)
  }
  const clearForm = () => {
    setBill(0)
    setTip(0)
    setCustomTip(0)
    setPeople("")
  }

  return (
    <div className={styles.container}>
      <article className={styles.app}>
        <h2>
          <span className={styles["sr-only"]}>Splitter</span>
          <img src={logo} alt="" />
        </h2>

        <div>
          <form className={styles.form} id="tip-form">
            <label className={styles.input}>
              Bill
              <input
                type="number"
                name="bill"
                step={0.05}
                min={0.05}
                value={bill || ""}
                placeholder="0"
                onChange={(e) => setBill(e.target.valueAsNumber)}
              />
              <img src={dollarIcon} alt="" />
            </label>

            <fieldset className={styles.tip}>
              <legend>Select Tip %</legend>

              <label>
                <input
                  className={styles["sr-only"]}
                  type="radio"
                  name="tip"
                  checked={tip === 5}
                  onChange={() => updateTip(5)}
                />
                5%
              </label>

              <label>
                <input
                  className={styles["sr-only"]}
                  type="radio"
                  name="tip"
                  checked={tip === 10}
                  onChange={() => updateTip(10)}
                />
                10%
              </label>

              <label>
                <input
                  className={styles["sr-only"]}
                  type="radio"
                  name="tip"
                  checked={tip === 15}
                  onChange={() => updateTip(15)}
                />
                15%
              </label>

              <label>
                <input
                  className={styles["sr-only"]}
                  type="radio"
                  name="tip"
                  checked={tip === 25}
                  onChange={() => updateTip(25)}
                />
                25%
              </label>

              <label>
                <input
                  className={styles["sr-only"]}
                  type="radio"
                  name="tip"
                  checked={tip === 50}
                  onChange={() => updateTip(50)}
                />
                50%
              </label>

              <label className={styles["sr-only"]} htmlFor="tip">
                Custom tip
              </label>
              <input
                className={styles["custom-tip"]}
                type="number"
                name="tip"
                id="tip"
                placeholder="Custom"
                step={1}
                min={0}
                value={customTip || ""}
                onChange={(e) => updateCustomTip(e.target.valueAsNumber)}
              />
            </fieldset>

            <label className={styles.input}>
              Number of People{" "}
              <span
                className={`${numberOfPeople < 1 ? styles.error : styles.hidden}`}
                aria-live="polite"
              >
                Can't be zero
              </span>
              <input
                type="number"
                name="people"
                step={1}
                min={1}
                placeholder="0"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
              <img src={personIcon} alt="" />
            </label>
          </form>

          <section className={styles.feedback}>
            <p aria-live="polite">
              <span>
                Tip Amount <br />/ person
              </span>

              <span>
                {peopleIsZero
                  ? "$0.00"
                  : formatToCurrency(calculateTip() / numberOfPeople)}
              </span>

              <span>
                Total <br />/ person
              </span>

              <span>
                {peopleIsZero
                  ? "$0.00"
                  : formatToCurrency(calculateTotal() / numberOfPeople)}
              </span>
            </p>

            <button className={styles.button} type="reset" onClick={clearForm}>
              Reset
            </button>
          </section>
        </div>
      </article>
    </div>
  )
}
