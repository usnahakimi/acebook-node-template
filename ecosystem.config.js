module.exports = {
    apps: [
      {
        name: "usna-acebook",
        script: "npm",
        args: 'start',
        interpreter: 'none',
        env: {
          NODE_ENV: "production",
          HOST: '0.0.0.0',
          PORT: '3000',
        },
      },
    ],
  }