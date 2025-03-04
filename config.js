require('dotenv').config()

module.exports = {
  s3: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    endpoint: process.env.S3_ENDPOINT,
    bucket: process.env.S3_BUCKET,
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
