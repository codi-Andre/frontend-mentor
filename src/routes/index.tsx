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

        <li>
          <Link to="/testimonials-grid-section">Testimonials grid section</Link>
        </li>
      </ol>

      <h2>Javascript fundamentals</h2>

      <ol>
        <li>
          <Link to="/article-preview-component">Article preview component</Link>
        </li>

        <li>
          <Link to="/newsletter-sign-up-form-with-success-message">
            Newsletter sign-up form with success message
          </Link>
        </li>

        <li>
          <Link to="/time-tracking-dashboard">Time tracking dashboard</Link>
        </li>

        <li>
          <Link to="/tip-calculator-app">Tip calculator app</Link>
        </li>
      </ol>

      <h2>Introduction to web accessibility</h2>

      <ol>
        <li>
          <Link to="/interactive-rating-component">
            Interactive rating component
          </Link>
        </li>

        <li>
          <Link to="/faq-accordion">FAQ accordion</Link>
        </li>

        <li>
          <Link to="/contact-form">Contact form</Link>
        </li>

        <li>
          <Link to="/news-homepage">News homepage</Link>
        </li>
      </ol>
    </div>
  )
}
