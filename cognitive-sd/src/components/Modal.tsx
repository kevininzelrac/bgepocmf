import { useRef, useState } from "react";

export default function Modal({
  button,
  children,
  delay = 300,
}: {
  button: (handleModal: () => void) => React.ReactNode;
  children: (handleModal: () => void) => React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [display, setDisplay] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleModal = () => {
    if (transition) {
      setTransition(false);
      setTimeout(() => {
        ref.current?.close();
        setDisplay(false);
      }, delay);
    } else {
      setDisplay(true);
      setTimeout(() => {
        ref.current?.showModal();
        setTransition(true);
      }, 10);
    }
  };
  return (
    <>
      {button(handleModal)}
      {display && (
        <dialog
          ref={ref}
          onCancel={handleModal}
          className={transition ? "show" : "hide"}
        >
          {children(handleModal)}
        </dialog>
      )}
    </>
  );
}
