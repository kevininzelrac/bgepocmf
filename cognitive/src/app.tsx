import "./app.css";
import "./modal.css";

import Modal from "./components/modal";

export default function App({ message }: { message?: string }) {
  return (
    <main data-cognitive>
      <h2>Cognitive</h2>
      <p>Micro Front-End Proof of Concept</p>
      {message ? <i>{message}</i> : null}
      <Modal
        button={(handleModal) => <button onClick={handleModal}>Open</button>}
      >
        {(handleModal) => (
          <>
            <h3>Modal</h3>
            <button onClick={handleModal}>Close</button>
          </>
        )}
      </Modal>
    </main>
  );
}
