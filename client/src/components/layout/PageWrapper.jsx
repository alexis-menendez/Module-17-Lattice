// Module-17-Lattice/client/src/components/layout/PageWrapper.jsx

import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div className="container p-4 mx-auto">
      {children}
    </div>
  );
};

export default PageWrapper;
