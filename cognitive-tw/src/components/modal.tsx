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
      setTimeout(() => (ref.current?.close(), setDisplay(false)), delay);
    } else {
      setDisplay(true);
      setTimeout(() => (ref.current?.showModal(), setTransition(true)), 10);
    }
  };

  const _dialog =
    "bg-slate-50 fixed right-0 top-0 m-auto mr-0 box-border h-screen max-h-full w-1/3 border-3 border-green-700 p-4 [&::backdrop]:bg-black text-gray-600";
  const _show =
    "translate-x-100 w-max-full transition-all duration-300 [&::backdrop]:opacity-70 [&::backdrop]:transition-opacity";
  const _hide =
    "translate-x-full opacity-0 transition-all duration-300 [&::backdrop]:opacity-0 [&::backdrop]:transition-opacity";

  return (
    <>
      {button(handleModal)}
      {display && (
        <dialog
          ref={ref}
          onCancel={handleModal}
          className={`${_dialog} ${transition ? _show : _hide}`}
        >
          {children(handleModal)}
        </dialog>
      )}
    </>
  );
}
