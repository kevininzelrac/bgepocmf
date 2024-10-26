import Modal from "../../components/modal";

export default function Synthese() {
  return (
    <section>
      <p>Synthèse</p>
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
    </section>
  );
}
