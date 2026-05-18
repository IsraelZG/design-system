// style-dictionary.config.js
// Builds two themes (light, dark) for four platforms (CSS, RN/JS, iOS, Android).
// Run: node style-dictionary.config.js

const StyleDictionary = require('style-dictionary');

// --- Custom transforms ----------------------------------------------------

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: (t) =>
    ['spacing', 'sizing', 'borderRadius', 'borderWidth', 'fontSizes'].includes(
      t.type
    ),
  transformer: (t) => {
    const v = String(t.value);
    if (v.endsWith('px') || v.endsWith('rem') || v.endsWith('em') || v === '0' || v.endsWith('%')) return v;
    if (!isNaN(parseFloat(v))) return `${parseFloat(v)}px`;
    return v;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'css/custom',
  transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'color/css'],
});

// --- Build function -------------------------------------------------------

function buildTheme(themeName) {
  const sd = StyleDictionary.extend({
    source: [
      'tokens/global/**/*.json',
      `tokens/themes/${themeName}/**/*.json`,
      'tokens/semantic/**/*.json',
    ],
    platforms: {
      // ---------- WEB: CSS variables ----------
      css: {
        transformGroup: 'css/custom',
        buildPath: `build/web/`,
        prefix: 'ds',
        files: [
          {
            destination: `theme-${themeName}.css`,
            format: 'css/variables',
            options: { outputReferences: false, selector: `:root[data-theme="${themeName}"], .theme-${themeName}` },
          },
        ],
      },

      // ---------- WEB: JS module (Tailwind, runtime theming) ----------
      js: {
        transformGroup: 'js',
        buildPath: 'build/web/',
        files: [
          { destination: `theme-${themeName}.js`,  format: 'javascript/es6' },
          { destination: `theme-${themeName}.d.ts`, format: 'typescript/es6-declarations' },
        ],
      },

      // ---------- React Native ----------
      rn: {
        transformGroup: 'react-native',
        buildPath: 'build/react-native/',
        files: [
          { destination: `theme-${themeName}.js`, format: 'javascript/module-flat' },
          { destination: `theme-${themeName}.d.ts`, format: 'typescript/module-declarations' },
        ],
      },

      // ---------- iOS (Swift) ----------
      ios: {
        transformGroup: 'ios-swift',
        buildPath: 'build/ios/',
        files: [
          {
            destination: `Theme${themeName[0].toUpperCase()}${themeName.slice(1)}.swift`,
            format: 'ios-swift/class.swift',
            options: { className: `Theme${themeName[0].toUpperCase()}${themeName.slice(1)}` },
          },
        ],
      },

      // ---------- Android (XML resources) ----------
      android: {
        transformGroup: 'android',
        buildPath: 'build/android/',
        files: [
          { destination: `theme_${themeName}_colors.xml`, format: 'android/colors', filter: (t) => t.type === 'color' },
          { destination: `theme_${themeName}_dimens.xml`, format: 'android/dimens', filter: (t) => ['spacing', 'sizing', 'borderRadius', 'borderWidth'].includes(t.type) },
        ],
      },

      // ---------- Embedded / TV — extra-large dimension variant (optional) ----------
      tv: {
        transformGroup: 'css/custom',
        buildPath: 'build/tv/',
        prefix: 'ds',
        files: [
          {
            destination: `theme-${themeName}-tv.css`,
            format: 'css/variables',
            options: { selector: `:root[data-theme="${themeName}"][data-density="tv"]` },
          },
        ],
      },
    },
  });

  sd.buildAllPlatforms();
}

['light', 'dark'].forEach(buildTheme);
console.log('✓ Built light + dark themes across CSS / JS / RN / iOS / Android.');
