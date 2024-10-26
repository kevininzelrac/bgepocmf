import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
const Cognitive = lazy(() => import("cognitive/App"));

export default function App() {
  return (
    <main>
      <h1>MBV</h1>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Cognitive message={"Message from mbv"} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
