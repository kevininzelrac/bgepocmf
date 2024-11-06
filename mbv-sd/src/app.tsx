import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
const Cognitive = lazy(() => import("cognitive/App"));

export default function App() {
  return (
    <main>
      #main
      <h1>MBV</h1>
      <h1>Title 1</h1>
      <h2>Title 2</h2>
      <h3>Title 3</h3>
      <h4>Title 4</h4>
      <nav>#nav</nav>
      <article>#article</article>
      <section>#section</section>
      <div>#div</div>
      <span>#span</span>
      <a href="#">#Link 1</a>
      <button>#button</button>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Cognitive message={"Message from mbv"} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
