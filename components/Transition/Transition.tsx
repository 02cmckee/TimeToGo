import React, { useRef, useEffect, useContext } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { TransitionProps } from "react-transition-group/Transition";
import { Parent } from "./types";

const TransitionContext = React.createContext<Parent>({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

const CSSTransition = ({
  show,
  enter = "",
  enterStart = "",
  enterEnd = "",
  leave = "",
  leaveStart = "",
  leaveEnd = "",
  appear,
  unmountOnExit,
  tag = "div",
  children,
  addEndListener,
  ...rest
}: CSSTransitionProps) => {
  const enterClasses = enter.split(" ").filter((s: string) => s.length);
  const enterStartClasses = enterStart
    .split(" ")
    .filter((s: string) => s.length);
  const enterEndClasses = enterEnd.split(" ").filter((s: string) => s.length);
  const leaveClasses = leave.split(" ").filter((s: string) => s.length);
  const leaveStartClasses = leaveStart
    .split(" ")
    .filter((s: string) => s.length);
  const leaveEndClasses = leaveEnd.split(" ").filter((s: string) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: HTMLDivElement, classes: string[]) {
    return classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLDivElement, classes: string[]) {
    return classes.length && node.classList.remove(...classes);
  }

  const nodeRef = React.useRef<HTMLDivElement>(null);
  const Component = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: () => any) => {
        return nodeRef.current?.addEventListener("transitionend", done, false);
      }}
      onEnter={() => {
        if (!nodeRef.current) return;
        if (!removeFromDom) nodeRef.current.style.display = "";
        addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        if (!nodeRef.current) return;
        removeClasses(nodeRef.current, enterStartClasses);
        addClasses(nodeRef.current, enterEndClasses);
      }}
      onEntered={() => {
        if (!nodeRef.current) return;
        removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
      }}
      onExit={() => {
        if (!nodeRef.current) return;
        addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        if (!nodeRef.current) return;
        removeClasses(nodeRef.current, leaveStartClasses);
        addClasses(nodeRef.current, leaveEndClasses);
      }}
      onExited={() => {
        if (!nodeRef.current) return;
        removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
        if (!removeFromDom) nodeRef.current.style.display = "none";
      }}
    >
      <Component
        ref={nodeRef}
        {...rest}
        style={{ display: !removeFromDom ? "none" : null }}
      >
        {children}
      </Component>
    </ReactCSSTransition>
  );
};

const Transition = ({
  show,
  appear,
  addendlistener,
  ...rest
}: TransitionProps) => {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
};

export default Transition;
