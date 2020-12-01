import React from 'react';
import classNames from 'classnames';

export default function Overlay({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={classNames(
        'fixed inset-0 z-10 transition-opacity duration-500 bg-gray-900',
        { 'pointer-events-auto opacity-50': menuOpen },
        { 'pointer-events-none opacity-0': !menuOpen }
      )}
      onClick={() => setMenuOpen(false)}
    ></div>
  );
}
