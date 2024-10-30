import Back from "../../components/back";
import Modal from "../../components/modal";

export default function Produits() {
  return (
    <section>
      <Back />
      <p> Produits</p>
      <Modal
        button={(handleModal) => <button onClick={handleModal}>Open</button>}
      >
        {(handleModal) => (
          <>
            <h3>Details</h3>
            <button onClick={handleModal}>Close</button>
          </>
        )}
      </Modal>
    </section>
  );
}
