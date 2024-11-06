import ShadowDom from "./components/ShadowDom";
import Modal from "./components/Modal";
import styles from "./styles/index.css?inline";

export default function App({ message }: { message?: string }) {
  return (
    <ShadowDom styles={[styles]}>
      <main>
        #main - Shadow Dom
        <h1>Micro Front-End Proof of Concept with Shadow Dom</h1>
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
      </main>
    </ShadowDom>
  );
}
