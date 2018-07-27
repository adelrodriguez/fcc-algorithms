'use strict';

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  const PI = 3.141592;

  return arr.map(({ name, avgAlt }) => {
    // a is the orbit's semi-major axis
    const a = Math.round(avgAlt + EARTH_RADIUS);
    const t = Math.round(2 * PI * (((a ** 3) / GM) ** 0.5));

    return { name, orbitalPeriod: t };
  });
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
