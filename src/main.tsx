import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createRouter,
  createHashHistory,
} from "@tanstack/react-router"
import "./styles/modern-normalize.css"
import "./styles/index.css"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"

const hashHistory = createHashHistory()
// Create a new router instance
const router = createRouter({
  routeTree,
  history: hashHistory,
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
