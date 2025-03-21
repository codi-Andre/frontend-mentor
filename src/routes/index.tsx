import { createFileRoute, Link } from "@tanstack/react-router"
import styles from "./index.module.css"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className={styles.container}>
      <h1>Welcome visitor!</h1>

      <p>
        List of challenges provided by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .
      </p>

      <h2>Getting started</h2>

      <ol>
        <li>
          <Link to="/qr-code-component">QR code component</Link>
        </li>

        <li>
          <Link to="/blog-preview-card">Blog preview card</Link>
        </li>

        <li>
          <Link to="/social-links-profile">Social links profile</Link>
        </li>

        <li>
          <Link to="/recipe-page">Recipe page</Link>
        </li>
      </ol>

      <h2>Building responsive layouts</h2>

      <ol>
        <li>
          <Link to="/product-preview-card">Product preview card component</Link>
        </li>

        <li>
          <Link to="/four-card-feature-section">Four card feature section</Link>
        </li>
      </ol>
    </div>
  )
}
