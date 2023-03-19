import React, { useState, useTransition } from 'react'

export const Prueba = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startTransition, isPending] = useTransition({ timeoutMs: 500 });

  const toggleOpen = () => {
    startTransition(() => {
      setIsOpen(!isOpen);
    });
  };

  return (
    <div className="collapsible bg-slate-300">
      <button onClick={toggleOpen}>
        title <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isPending && <div>Loading...</div>}
      {isOpen && !isPending && (
        <div className="collapsible-content">hola</div>
      )}
    </div>
  );
}
