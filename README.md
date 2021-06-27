# Vue Visualize

## Overview

- Use the url of an IG post to fetch info about the post, specifically the image.
- Will be able to save images to and delete images from your vision board
- Installed Netlify CLI globally or already had it installed globally, used the directions here to authenticate with Netlify via the command line:
  https://docs.netlify.com/cli/get-started/
- Ran `netlify init` to link the repository to Netlify for continuous deployment. You must complete these steps in order to use Netlify Dev
- Using Netlify Dev to run a server locally for the function. `netlify dev` is the command to start the local development server.
- Uses a Netlify serverless function to communicate with the IG API
- Vite is used to build the frontend and Vue is the frontend framework
- Netlify url for the site is https://vue-visualize.netlify.app/
- Locally, `yarn netlify` starts the local netlify server for the serverless function, and the Vite server for the frontend

> Netlify Dev will attempt to detect the site generator or build command that you are using, and run these on your behalf, while adding other development utilities. If you have a JavaScript project, it looks for the best package.json script to run for you, using simple heuristics, so you can use the full flexibility of npm scripts. We may add more intelligence to this in the future.

> Overriding the detectors: The number of project types which Netlify Dev can detect is growing, but if yours is not yet supported (contributions welcome!), you can instruct Netlify Dev to run the project on your behalf by declaring it in a [dev] block of your netlify.toml file."

- https://github.com/netlify/cli/blob/main/docs/netlify-dev.md#project-detection
- Client token and access token are stored as environmental variables on Netlify production and are used by the Netlify dev server https://github.com/netlify/cli/blob/main/docs/netlify-dev.md#environment-variables
- The IG api url is https://graph.facebook.com/v9.0/instagram_oembed
- The full path to fetch a post is `https://graph.facebook.com/v9.0/instagram_oembed?url=${postUrl}&access_token=${ACCESS_TOKEN}`
- /functions/ig-post.js is the serverless function file
- The url for the serverless function is `.netlify/functions/ig-post?url=[igUrl]`
- Using a redirect in the netlify.toml to shorten api url to `/api/ig-post?url=[igUrl]`
- Whenever i push to github the site is redeployed
- Using the `node-fetch` package in my `ig-post.js` serverless function file in order to use `fetch` with Node.
