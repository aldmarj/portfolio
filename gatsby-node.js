/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

export function onCreateWebpackConfig({ stage, loaders, actions }) {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: './node-modules/react-chat-window',
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
