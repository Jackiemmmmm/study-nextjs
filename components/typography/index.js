import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const useStyles = makeStyles({
  body1: {
    fontSize: 16,
    lineHeight: '24px',
    color: ({ color }) => color || '#565656',
    margin: 0,
  },
  h4: {
    fontSize: 32,
    lineHeight: '48px',
    color: ({ color }) => color || '#565656',
    fontWeight: 600,
    margin: 0,
  },
  '@media (max-width: 768px)': {
    h4: { fontSize: 24 },
    body1: { fontSize: 14 },
  },
});

const Typography = forwardRef((props, ref) => {
  const { component: Component = 'span', variant, className, color, ...otherProps } = props;
  const classes = useStyles({ color });
  return (
    <Component
      {...otherProps}
      className={classNames(classes[variant ?? 'body1'], className)}
      ref={ref}
    />
  );
});

Typography.propTypes = {
  component: PropTypes.any,
  variant: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default Typography;
