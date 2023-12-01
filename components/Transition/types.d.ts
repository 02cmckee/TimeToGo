import { Dispatch, SetStateAction, RefObject } from 'react';

export interface Parent {
    parent: {
        show?: boolean;
        isInitialRender?: boolean;
        appear?: string;
    };
}

export interface closeOnKeyPress {
    elementOpen: boolean,
    setElementOpen: Dispatch<SetStateAction<boolean>>
}

export interface closeOnClick {
    elementRef: RefObject<HTMLDivElement>,
    triggerRef: RefObject<HTMLButtonElement>,
    elementOpen: boolean,
    setElementOpen: Dispatch<SetStateAction<boolean>>

}
