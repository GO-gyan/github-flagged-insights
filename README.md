# GitHub Flagged Insights

This simple application allows users to explore and flag GitHub repositories. It leverages Next.js for server-side rendering, server actions, and React server components to enhance the user experience. Additionally, it implements infinite scrolling using the Intersection Observer API for smooth pagination.

## Features

-   List GitHub repositories based on the search query `javascript` sorted by stars.
-   Allow users to set a visible flag beside any result to mark it for future reference.
-   Remember user-set flags even after refreshing the page.
-   Implement server-side pagination, loading additional results as the user scrolls.
-   Display avatar, full name, description, and user-set flag for each repository.
-   Utilize Cypress for testing to ensure robust functionality.

## Technologies Used

-   **Next.js:** The application is built with Next.js to take advantage of its server-side rendering capabilities, which enhances performance and SEO. Server actions and React server components are used for a smoother user experience.
-   **Infinite Scrolling:** The Intersection Observer API is employed for infinite scrolling, allowing for a more seamless pagination experience without unnecessary page reloads.
-   **Cypress:** Cypress is used for end-to-end testing to ensure the reliability and functionality of the application. It provides a fast, easy, and reliable way to test the application's features.

## System Requirements

-   **Node.js:** Version 18.17 or later.
-   **Operating Systems:** macOS, Windows (including WSL), and Linux are supported.

## Usage

1.  Clone the repository:

```bash
git clone https://github.com/GO-gyan/github-flagged-insights.git
cd github-flagged-insights
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and visit http://localhost:3000 to explore GitHub repositories and set flags.

5. Run the test

```bash
npx cypress open
```

## Deployment

The application is deployed on Vercel. Visit [GitHub Flagged Insights](https://github-flagged-insights.vercel.app) to explore and flag GitHub repositories.

## Developer benefits

-   **Improved Performance:** Next.js's server-side rendering results in faster page loads and improved performance, especially for SEO.
-   **Enhanced User Experience:** React server components provide a smoother, more interactive user experience by fetching data on the server and updating only the necessary parts of the page.
-   **Efficient Pagination:** Server-side pagination and infinite scrolling enhance the efficiency of navigating through the list of repositories.

## End User Benefits

-   **Responsive UI:** The application provides a responsive user interface that dynamically loads content, making it user-friendly on various devices.
-   **Persistent Flags:** Users can mark repositories with flags, and these flags persist even if the page is refreshed, offering a seamless experience.
-   **Effortless Exploration:** Infinite scrolling makes it easy for users to explore a large number of repositories without the need for traditional pagination.
