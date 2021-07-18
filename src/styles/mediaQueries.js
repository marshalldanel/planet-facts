// Media Queries in em! Em still = 16px
// |   px | em |
// +------+-----+
// |  320 |  20 |
// |  480 |  30 |
// |  768 |  48 |
// | 1024 |  64 |
// | 1200 |  75 |
// | 1600 | 100 |

export const breakpoints = {
  mobile: 47.9375, // = 767px mobile nav
  tablet: 48,
  desktop: 64,
  desktopLg: 100,
};

export const mediaQueries = (key, direction = 'min') => {
  return (style) =>
    `@media (${direction}-width: ${breakpoints[key]}em) { ${style} }`;
};
