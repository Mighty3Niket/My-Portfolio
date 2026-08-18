import React from 'react';

/**
 * Programmatic smooth-scroll utility to scroll to target element IDs 
 * without modifying browser URL hash parameters.
 */
export const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, 
    id?: string
) => {
    e.preventDefault();
    if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
