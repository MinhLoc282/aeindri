import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import useWeb3 from 'hooks/useWeb3';

import AdminPage from 'pages/AdminPage/AdminPage';

import styles from './Profile.module.scss';

function ProtectedPage() {
  const { wallet, connect } = useWeb3();

  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    if (!wallet.address) {
      connect();
    }
  }, [wallet.address, connect]);

  if (!wallet.address) {
    return (
      <div className={styles.ConnectingContainer}>
        <div className={styles.LoadingSpinner} />
        <div>Connecting MetaMask...</div>
      </div>
    );
  }

  const isAuthenticated = accessToken;
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return <AdminPage />;
}

export default ProtectedPage;
