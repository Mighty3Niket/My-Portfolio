import React from 'react';

/**
 * Programmatic smooth-scroll utility to scroll to target element IDs 
 * without modifying browser URL hash parameters.
 */
export const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, 
    id?: string
) => {
    const isModifiedClick = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
    if (isModifiedClick) return;

    if (!id) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const element = document.getElementById(id);
    if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
