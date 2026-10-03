import { useEffect, useRef } from 'react';
import AppointmentForm from './AppointmentForm';

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function AppointmentModal({ onClose }) {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('input:not([tabindex="-1"])')?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll(focusableSelector)].filter(
        (element) => element.offsetParent !== null
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = overflow;
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) previouslyFocused.focus();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-neutral-950/45 px-4 py-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative my-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="Close appointment form"
        >
          &times;
        </button>

        <h2 id="appointment-modal-title" className="pr-10 text-2xl font-bold text-neutral-950">
          Book an appointment
        </h2>
        <p className="mt-2 pr-8 text-sm text-neutral-500">
          Share your details and our hospital team will get back to you.
        </p>

        <AppointmentForm idPrefix="modal" variant="modal" />
      </div>
    </div>
  );
}
