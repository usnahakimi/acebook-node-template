module.exports = {
    apps: [
      {
        name: 'usna-acebook',
        script: 'npm',
        args: 'serve -s build -l 3000 -n',
        interpreter: 'none',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  }