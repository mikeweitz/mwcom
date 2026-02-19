import { useState, useEffect } from 'react';

/** useage
 * import React, { useRef } from 'react';
 * import useInViewport from './use-in-viewport';
 *
 * function MyComponent() {
 *
 *  const targetRef = useRef<HTMLDivElement>(null);
 *  const inViewport = useInViewport(targetRef, { threshold: 0.5 });
 *
 *  return (
 *      <div>
 *          <div style={{ height: '1000px' }}>Scroll down</div>
 *          <div ref={targetRef} style={{ height: '200px', background: inViewport ? 'green' : 'red' }}>
 *              {inViewport ? 'In viewport' : 'Not in viewport'}
 *          </div>
 *      </div>
 *  );
 * }
 *
 * export default MyComponent;
 *
 */
export default function useInViewport<T extends HTMLElement>(
    ref: React.RefObject<T>,
    options?: IntersectionObserverInit
) {
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInViewport(entry.isIntersecting);
        }, options);
        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options, ref]);

    return inViewport;
}
