# Next.js router.query accessing undefined parameters

This repository demonstrates a common error in Next.js applications when using the `router.query` object to access URL query parameters. The problem arises when attempting to access a parameter that is not present in the URL.  This leads to a runtime error, especially noticeable during initial page load before parameters populate.

## Bug
The `bug.js` file contains a Next.js component that attempts to read the `id` query parameter from the URL. If the `id` parameter is not available, accessing `router.query.id` results in an error.

## Solution
The `bugSolution.js` file shows a solution that safely accesses query parameters using optional chaining (`?.`) and a default value. This prevents runtime errors when parameters are undefined.