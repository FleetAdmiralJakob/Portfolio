const OptimizedImagesPlugin = require("react-optimized-images/plugin");

module.exports = {
  // ... webpack config
  plugins: [
    // ... other plugins
    new OptimizedImagesPlugin({
      minWidth: 300,
      breakpoints: [
        {
          maxWidth: 576,
          resizeTo: 50,
        },
        {
          maxWidth: 992,
          resizeTo: 80,
        },
      ],
      enabled: process.env.NODE_ENV === "production",
      lazy: false,
    }),
  ],
};
