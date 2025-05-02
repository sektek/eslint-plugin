/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable filenames/match-regex */
/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
