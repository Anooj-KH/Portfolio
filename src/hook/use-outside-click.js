import { useEffect } from 'react';

/**
 * Custom hook to detect clicks outside of a given element.
 *
 * @param {React.RefObject} ref - The ref of the element to detect outside clicks for.
 * @param {Function} callback - The callback function to call when an outside click is detected.
 */
export function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(); // Execute the callback if click is outside of the element
      }
    }

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]); // The effect runs when ref or callback changes
}
