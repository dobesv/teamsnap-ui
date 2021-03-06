/**
 * @name InputControl
 *
 * @description
 *  The InputControl component is used internally to render Checkbox, Radio and Toggles.  The Checkbox, Radio and
 *  Toggle components should be used instead.  See <Radio />, <Checkbox /> or <Toggle /> for more information.
 *
 * @example
 *  <InputControl name='example' type='radio' label='Check Me' isInline />
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../utils/helpers";


class InputControl extends React.PureComponent<PropTypes.InferProps<typeof InputControl.propTypes>, any> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.node,
    group: PropTypes.string,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    isInline: PropTypes.bool,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object
  };

  static defaultProps = {
    label: null,
    group: null,
    inputProps: {},
    labelProps: {},
    isInline: false,
    className: null,
    mods: null,
    style: {},
    otherProps: {}
  };

  render() {
    const {
      name,
      label,
      group,
      type,
      inputProps,
      labelProps,
      isInline,
      className,
      mods,
      style,
      otherProps
    } = this.props;

    const classes = getClassName(
      className,
      isInline && "Checkbox--inline",
      mods
    );

    return (
      <div className={classes} style={style} {...otherProps}>
        <input
          className="Checkbox-input"
          type={type}
          name={group || name}
          id={name}
          {...inputProps}
        />
        <label className="Checkbox-label" htmlFor={name} {...labelProps}>
          {label}
        </label>
      </div>
    );
  }
}

export default InputControl;
