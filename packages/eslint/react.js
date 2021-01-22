module.exports = {
  extends: [
    '@equinor/eslint-config-fusion',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    // react 17 rules
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};