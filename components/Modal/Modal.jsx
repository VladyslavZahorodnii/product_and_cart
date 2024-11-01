"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ open, children, onClose }) {
  const dialog = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true only on the client

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const modal = dialog.current;

    if (modal && open) {
      if (!modal.open) modal.showModal();
    } else if (modal && !open) {
      if (modal.open) modal.close();
    }

    return () => {
      if (modal?.open) modal.close();
    };
  }, [open]);

  if (!isMounted) return null;

  return createPortal(
    <dialog className={styles.modal} ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
