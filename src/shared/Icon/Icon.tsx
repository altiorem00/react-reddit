import React from 'react';

interface IIcon {
  name: string,
  size?: number
}
export function Icon({ name, size }: IIcon) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
  const SVGIcon = require(`!svg-react-loader!/src/assets/icons/${name}.svg`);
  if (size) {
    return (<SVGIcon width={`${size}px`} height={`${size}px`} />);
  }
  return (<SVGIcon />);
}
