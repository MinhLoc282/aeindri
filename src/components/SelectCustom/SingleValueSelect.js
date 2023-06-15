import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

import './style.scss';

function SingleValueSelect(props) {
  const { data } = props;

  return (
    <components.SingleValue {...props}>
      {data && (
        <div className="select-single-value select-custom">
          <div className="me-3">
            <img src={data.img} alt="alt" />
          </div>

          <span className="select-name">{data.label}</span>
        </div>
      )}
    </components.SingleValue>
  );
}

SingleValueSelect.propTypes = {
  data: PropTypes.instanceOf(Object),
};

SingleValueSelect.defaultProps = {
  data: {},
};

export default memo(SingleValueSelect);
