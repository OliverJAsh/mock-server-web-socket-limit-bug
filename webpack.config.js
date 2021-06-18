module.exports = {
  entry: "./src/main.js",
  /**
   * `mockserver-client` transitively imports `fs` which doesn't exist when
   * bundling for the browser. This results in an error during webpack
   * compilation. This is a workaround for that.
   * https://github.com/mock-server/mockserver-client-node/issues/47#issuecomment-856912521
   */
  node: {
    fs: "empty",
  },
};
