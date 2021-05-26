import React from 'react';

import classNames from 'classnames';

function ScrollSection({
  heading,
  id,
  theme = 'indigo',
  children,
  classes = '',
}) {
  const colour =
    theme === 'indigo'
      ? 'from-indigo-700 to-indigo-300'
      : 'from-teal-700 to-teal-300';

  return (
    <section
      className={classNames(
        'w-full xl:h-screen xl-max:pb-50 xl:px-100 bg-gray-100 relative xl-max:container',
        classes
      )}
      id={id}
      data-scroll-section
    >
      {heading && (
        <h1
          className={classNames(
            'heading-2xl text-gradient bg-gradient-to-tr xl:absolute inset-x-0 text-center xl:mt-40 xl-max:mb-20',
            colour
          )}
          data-scroll
          data-scroll-speed={-2}
        >
          {heading}
        </h1>
      )}
      <div className='h-full flex items-center'>{children}</div>
    </section>
  );
}

export default ScrollSection;
