import React, { createContext, useEffect, useState } from 'react';

export const LocomotiveContext = createContext({
  locomotive: null,
});

export const LocomotiveProvider = ({ children, options }) => {
  const [locomotive, setLocomotive] = useState(null);

  useEffect(() => {
    if (!locomotive) {
      (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;

          const direction = window.matchMedia(`(min-width: 1025px)`).matches
            ? 'horizontal'
            : 'vertical';
          setLocomotive(
            new LocomotiveScroll({
              el:
                document.querySelector('[data-scroll-container]') ?? undefined,
              smooth: true,
              direction,
              multiplier: 0.6,
              reloadOnContextChange: true,
            })
          );
        } catch (error) {
          throw Error(`[LocomotiveProvider]: ${error}`);
        }
      })();
    }

    return () => {
      if (locomotive) {
        locomotive.destroy();
        setLocomotive(null);
      }
    };
  }, [locomotive]);

  return (
    <LocomotiveContext.Provider value={{ locomotive }}>
      {children}
    </LocomotiveContext.Provider>
  );
};

export const useLocomotive = () => {
  const { locomotive } = React.useContext(LocomotiveContext);
  if (locomotive === undefined) {
    throw new Error('useLocomotive must be used within a LocomotiveProvider');
  }
  return locomotive;
};
