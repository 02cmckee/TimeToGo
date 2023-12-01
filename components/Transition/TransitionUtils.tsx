import { closeOnClick, closeOnKeyPress } from "./types";

export const closeOnEscape = ({
  elementOpen,
  setElementOpen,
}: closeOnKeyPress) => {
  const keyHandler = ({ keyCode }: { keyCode: number }) => {
    if (!elementOpen || keyCode !== 27) return;
    setElementOpen(false);
  };
  document.addEventListener("keydown", keyHandler);
  return () => document.removeEventListener("keydown", keyHandler);
};

export const closeOnClickOutside = ({
  elementOpen,
  setElementOpen,
  elementRef,
  triggerRef,
}: closeOnClick) => {
  const clickHandler = (event: Event) => {
    const target = event.target as Node;
    if (!elementRef.current || !triggerRef.current) return;
    if (
      !elementOpen ||
      elementRef.current.contains(target) ||
      triggerRef.current.contains(target)
    ) {
      return;
    }
    setElementOpen(false);
  };
  document.addEventListener("click", clickHandler);
  return () => document.removeEventListener("click", clickHandler);
};
