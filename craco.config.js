const path = require('path')

const config = {
  webpack: {
    alias: {
      '@/src': path.resolve(__dirname, 'src/'),
    },
  },
};

module.exports = config