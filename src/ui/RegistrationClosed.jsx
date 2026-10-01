import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const RegistrationContext = createContext(null);

export function RegistrationClosedDialog({ onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
    const element = dialog.current;
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);
  return <dialog ref={dialog} className="registration-closed" aria-labelledby="registration-closed-title"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => {
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.target === event.currentTarget && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) onClose();
    }}>
    <h2 id="registration-closed-title">Registration is closed for this edition</h2>
    <button type="button" autoFocus onClick={onClose}>Close</button>
  </dialog>;
}

export function RegistrationProvider({ children }) {
  const [open, setOpen] = useState(false);
  const closeAction = useRef(null);
  const openRegistration = useCallback(onClose => {
    closeAction.current = typeof onClose === "function" ? onClose : null;
    setOpen(true);
  }, []);
  const closeRegistration = useCallback(() => {
    setOpen(false);
    closeAction.current?.();
    closeAction.current = null;
  }, []);
  return <RegistrationContext.Provider value={openRegistration}>
    {children}
    {open && <RegistrationClosedDialog onClose={closeRegistration} />}
  </RegistrationContext.Provider>;
}

export function useRegistrationClosed() { return useContext(RegistrationContext); }
