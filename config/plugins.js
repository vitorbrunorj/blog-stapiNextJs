module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

module.exports = {
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::page.page",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "page",
              slug: "{slug}",
            },
            openTarget: "StrapiPreviewPage",
          },
          published: {
            url: "http://localhost:3000/{slug}",
            openTarget: "StrapiPage",
          },
        },
        {
          uid: "api::post.post",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "post",
              slug: "{slug}",
            },
            openTarget: "StrapiPreviewPost",
          },
          published: {
            url: "http://localhost:3000/blog/{slug}",
            openTarget: "StrapiPost",
          },
        },
      ],
    },
  },
};

module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
});

module.exports = ({ env }) => ({
  documentation: {
    enabled: true,
  },
});

module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
});

module.exports = {
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
