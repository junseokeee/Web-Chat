module.exports = {
    // ...
    resolve: {
      fallback: {
        "dgram": require.resolve("dgram-browserify"), // 또는 빈 모듈로 대체
        "fs": false,
        "crypto": require.resolve("crypto-browserify"),
        "tls": false,
        "buffer": require.resolve("buffer/")
      }
    }
    // ...
  };