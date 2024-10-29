import "./tailwind.css";

import Modal from "./components/modal";
import Button from "./components/buttton";

export default function App({ message }: { message?: string }) {
  return (
    <main
      data-cognitive
      className="border-3 flex h-auto w-full flex-col items-start justify-start rounded-md border-green-700 bg-slate-50 p-1 text-gray-600"
    >
      <h2 className="text-2xl font-bold">Cognitive</h2>
      <p>Hello, World !</p>
      {message ? <i>{message}</i> : null}
      <Modal
        button={(handleModal) => <Button onClick={handleModal}>Open</Button>}
      >
        {(handleModal) => (
          <>
            <h3>Modal</h3>
            <Button onClick={handleModal}>Close</Button>
          </>
        )}
      </Modal>
    </main>
  );
}
