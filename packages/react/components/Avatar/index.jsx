import React from 'react';
import PropTypes from 'prop-types';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Avatar/index.scss';

function Avatar({
  className,
  style,
  src,
  size,
  shape
}) {
  const _style = { ...style };
  if (src) _style.backgroundImage = `url(${src})`;

  return (
    <div
      className={c(className, s.avatar, s[size], s[shape])}
      style={_style}
    />
  );
};

Avatar.Guide = Guide;

Avatar.defaultProps = {
  style: {},
  src: '',
  size: 'm',
  shape: 'circle'
};

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string
};

export default Avatar;
