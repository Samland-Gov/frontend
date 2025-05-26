module.exports = {
  presets: [
    ['@babel/preset-env', { 
      targets: { node: 'current' },
      modules: false // Ensure Babel doesn't transform modules
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    // Add any other plugins you need here
  ],
};