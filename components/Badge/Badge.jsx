import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Badge extends PureComponent {
  render() {
    const { prefixCls, className, theme, shape, sup, text, children } = this.props;

    const cls = classnames({
      [`${prefixCls}`]: true,
      [className]: !!className,
      [`theme-${theme}`]: !!theme,
      [`shape-${shape}`]: !!shape,
    });

    const supCls = classnames({
      [`${prefixCls}-sup`]: true,
      [`${prefixCls}-sup-up`]: sup,
    });

    return (
      <span className={cls}>
        {children}
        <sup className={supCls}>{text}</sup>
      </span>
    );
  }
}

Badge.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'error']),
  shape: PropTypes.oneOf(['dot', 'radius', 'round', 'circle']),
  sup: PropTypes.bool,
};

Badge.defaultProps = {
  prefixCls: 'za-badge',
  className: null,
  theme: 'error',
  shape: null,
  sup: false,
};

export default Badge;
