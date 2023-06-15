import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

import './style.scss';

function OptionSelect(props) {
  const { data } = props;

  return (
    <components.Option {...props}>
      <div className="select-option-value">
        <div className="me-3">
          <img src={data.img} alt="alt" />
        </div>

        <span className="select-name">{data.label}</span>
      </div>
    </components.Option>
  );
}

OptionSelect.propTypes = {
  data: PropTypes.instanceOf(Object),
};

OptionSelect.defaultProps = {
  data: {},
};

export default memo(OptionSelect);
