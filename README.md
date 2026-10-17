# React Simple Product Dashboard

A clean and interactive React application built using Vite as the build tool. This project demonstrates core React mental model principles including functional components, props passing, state management via `useState`, controlled components, conditional rendering, and component composition using the `children` prop.

# Challenges Faced & Key Learnings

Controlled Inputs & Dynamic Feedback: Ensuring the input field updates state on every keystroke (onChange) while gracefully falling back to a default "Guest" greeting when empty.

Decoupled Layout Composition: Implementing a generic <Card> component with the children prop to maintain strict separation between visual card styling and data rendering logic.

Directory Path Precision: Resolving Vite local server pathings during project scaffolding to ensure assets and components load reliably under the src/ directory structure.



## Project Structure & File Organization

The application follows a modular and clean component structure inside the `src/` directory:

```text
src/
 ├── components/
 │    ├── Card.jsx        # Wrapper layout component using children composition
 │    ├── Product.jsx     # Reusable presenter displaying title and price
 │    └── ProductList.jsx # Maps static product array with stable key props
 ├── App.jsx              # Root component managing application states
 ├── main.jsx             # React DOM root entry point
 └── index.css            # Global base layout styles
