module.exports = [
  {
    urlPattern: "https://60a3771d7c6e8b0017e26fe5.mockapi.io/todo",
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "todo",
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 60, // 60 seconds
      },
    },
  },
];
