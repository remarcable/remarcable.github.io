# marcnitzsche.de

Personal Website

## Development

```sh
git clone https://github.com/remarcable/remarcable.github.io.git
cd ./remarcable.github.io
npm i
cp .env.example .env # ...and fill in own values
npm start # open localhost:3000
```

## Setting up Photography page

Create a new S3 Bucket and enable public access. Additionally, [add a policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-2) to make files accessible from the web.

Put the bucket behind a CDN like Cloudfront or Cloudflare to benefit from caching and to reduce costs. Use the new URL in `.env`. If you use a domain alias (like `static.example.com`), make sure to name the bucket after that domain.

Create a new access key with read-only access to your bucket and add it to `.env`.

The file name is used to encode the width and height of the picture without having to download it. Name each picture in the format `<filename>-<width>-<height>.<extension>`, e.g. `DSC01356-3847x5770.jpg`. Upload new pictures to the S3 bucket you created. They will appear automatically on the Photography page after a rebuild.
