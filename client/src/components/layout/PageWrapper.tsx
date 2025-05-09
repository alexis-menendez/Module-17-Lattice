// client/src/components/layout/PageWrapper.tsx

import React, { ReactNode } from 'react';
import styles from '../../assets/css/layout/PageWrapper.module.css';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="container p-4 mx-auto">
      {children}
    </div>
  );
};

export default PageWrapper;
