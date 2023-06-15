import React, { useEffect } from 'react';
import {
  Switch, BrowserRouter as Router, Route,
} from 'react-router-dom';

import { LOCATION } from 'constants/index';

import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ESGPage from 'pages/ESGPage/ESGPage';
import AllNFTs from 'pages/AllNFTs/AllNFTs';
import AllBrands from 'pages/AllBrands/AllBrands';
import ScrollToTop from 'components/ScrollToTop';
import CreatePage from 'pages/Create';
import AddCollection from 'pages/AddCollection';
import MyCollection from 'pages/MyCollection/MyCollection';
import ProtectedPage from 'pages/ProfilePage/Profile';
import LoginPage from 'pages/LoginPage/LoginPage';
import UserPage from 'pages/UserPage/UserPage';
import Layout from 'Layout/Layout';
import WertWidgetWrapper from 'components/WertWidget/WertWidgetWrapper';
import AllCollections from 'pages/AllCollection/AllCollections';

import axiosClient from 'utils/axios';

import './App.scss';

function App() {
  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    axiosClient.defaults.headers.Authorization = accessToken;
  }, [accessToken]);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={LOCATION.LOGIN} component={LoginPage} />
        <Layout>
          <Route path={LOCATION.HOME_PAGE} component={HomePage} exact />
          <Route path={LOCATION.ABOUT_PAGE} component={AboutPage} exact />
          <Route path={LOCATION.ESG_PAGE} component={ESGPage} exact />
          <Route path={LOCATION.ALL_NFT} component={AllNFTs} />
          <Route path={LOCATION.ALL_BRANDS} component={AllBrands} />
          <Route path={LOCATION.ALL_COLLECTIONS} component={AllCollections} />

          <Route path={LOCATION.CREATE_BRAND} component={CreatePage} />

          <Route path={LOCATION.ADD_COLLECTION} component={AddCollection} />
          <Route path={LOCATION.MY_COLLECTION} component={MyCollection} />

          <Route path={LOCATION.POP_UP} component={WertWidgetWrapper} />

          <Route path={LOCATION.ADMIN_PAGE} component={ProtectedPage} />
          <Route path={LOCATION.USER_PAGE} component={UserPage} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
