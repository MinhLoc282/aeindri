import React from 'react';

import WertModule from '@wert-io/module-react-component';

import styles from './WertWidgetWrapper.module.scss';

function WertWidgetWrapper() {
  const options = {
    partner_id: '01GYYESXQH6W04RBVNA96Z5BS8',
    container_id: 'wert-widget',
    origin: 'https://sandbox.wert.io',
    lang: 'en',
  };

  return (
    <WertModule options={options} className={styles.WertWidgetWrapper} />
  );
}

export default WertWidgetWrapper;
