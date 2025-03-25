import { getTimeTrackingData } from "@/api/get-time-tracking-data"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import styles from "./time-tracking-dashboard.module.css"
import avatar from "@/assets/images/image-jeremy.png"
import ellipsisIcon from "@/assets/icons/icon-ellipsis.svg"

export const Route = createFileRoute(
  "/(javaScript-fundamentals)/time-tracking-dashboard"
)({
  component: RouteComponent,
})

const timeFrame = Object.freeze({
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
})

function RouteComponent() {
  const [data, setData] = useState<ReturnType<typeof getTimeTrackingData>>([])
  const [filter, setFilter] = useState<keyof typeof timeFrame>("weekly")

  useEffect(() => {
    setData(getTimeTrackingData())
  }, [])

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <div className={styles.profile}>
          <div>
            <img className={styles.image} src={avatar} alt="avatar" />

            <h2 className={styles.title}>
              Report for <br />
              Jeremy Robson
            </h2>
          </div>

          <label>
            <input
              type="radio"
              name="time-frame"
              checked={filter === "daily"}
              onChange={() => setFilter("daily")}
            />
            daily
          </label>

          <label>
            <input
              type="radio"
              name="time-frame"
              checked={filter === "weekly"}
              onChange={() => setFilter("weekly")}
            />
            weekly
          </label>

          <label>
            <input
              type="radio"
              name="time-frame"
              checked={filter === "monthly"}
              onChange={() => setFilter("monthly")}
            />
            monthly
          </label>
        </div>

        <ul className={styles.list}>
          {data.map(({ title, timeframes }) => (
            <li className={styles.card} key={title}>
              <div>
                <h3>{title}</h3>

                <input type="image" src={ellipsisIcon} alt="options" />

                <p>
                  {timeframes[filter].current}hrs{" "}
                  <span>
                    {timeFrame[filter]} - {timeframes[filter].previous}hrs
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
