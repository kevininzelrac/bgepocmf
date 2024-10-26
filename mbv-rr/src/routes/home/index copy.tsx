// import { lazy, Suspense } from "react";
// import ErrorBoundary from "../../components/ErrorBoundary";
// import useFetch from "../../hooks/useFetch";

// const Button = lazy(() => import("supernova/Button"));

export default function Home() {
  // const { data, loading, error } = useFetch<{
  //   message: string;
  // }>("/api/get");

  return (
    <>
      {/* <button>Click me !</button>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading Button...</p>}>
          <Button />
        </Suspense>
      </ErrorBoundary> */}
      <main>
        <h2>Home</h2>
        {/* <article>
          {error ? (
            <p>Error: {error}</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : data ? (
            <div>
              <p>
                <strong>Data from api : </strong>
                {data.message}
              </p>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </article> */}
      </main>
    </>
  );
}
