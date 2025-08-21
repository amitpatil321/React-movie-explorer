<div align="left">
    <div style="display: inline-block;">
        <h2 style="display: inline-block; vertical-align: middle; margin-top: 0;">REACT-MOVIE-EXPLORER</h2>
        <p>
	<em>Discover, Explore, Experience: Movies Unleashed!</em>
</p>
        <p>
	<img src="https://img.shields.io/github/license/amitpatil321/React-movie-explorer?style=plastic&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/amitpatil321/React-movie-explorer?style=plastic&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/amitpatil321/React-movie-explorer?style=plastic&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/amitpatil321/React-movie-explorer?style=plastic&color=0080ff" alt="repo-language-count">
</p>
        <p>Built with the tools and technologies:</p>
        <p>
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=plastic&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=plastic&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/ScrollReveal-FFCB36.svg?style=plastic&logo=ScrollReveal&logoColor=black" alt="ScrollReveal">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=plastic&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=plastic&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=plastic&logo=Lodash&logoColor=white" alt="Lodash">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=plastic&logo=Axios&logoColor=white" alt="Axios">
</p>
    </div>
</div>
<br clear="left"/>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The React-movie-explorer project is a user-friendly platform that simplifies movie discovery and exploration. With features like real-time search, dynamic genre lists, and interactive movie details, it caters to movie enthusiasts looking for a seamless browsing experience. By offering a visually appealing interface and comprehensive movie information, it enhances user engagement and enjoyment.

<img src="https://raw.githubusercontent.com/amitpatil321/React-TMDB/master/movies.png" />

---

## 👾 Features

|     |      Feature      | Summary                                                                                                                                                                                                                                                                                          |
| :-- | :---------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **React** for building a dynamic and interactive user interface.</li><li>Integrates **React Router** for managing navigation and routing within the application.</li><li>Employs **Axios** for handling API requests and data retrieval.</li></ul>                              |
| 🔩  | **Code Quality**  | <ul><li>Follows **ESLint** and **Prettier** standards for consistent code formatting.</li><li>Utilizes **PropTypes** for type-checking component props.</li></ul>                                                                                                                                |
| 📄  | **Documentation** | <ul><li>Extensive inline comments in **JavaScript** files for code clarity and understanding.</li><li>Includes a detailed **README.md** file with installation, usage, and testing instructions.</li><li>Utilizes **JSDoc** comments for documenting functions and components.</li></ul>         |
| 🔌  | **Integrations**  | <ul><li>Integrates **Ant Design** for UI components and styling.</li><li>Utilizes **React Player** for video playback functionality.</li><li>Includes **ScrollReveal** for scroll animations and effects.</li></ul>                                                                              |
| 🧩  |  **Modularity**   | <ul><li>Organizes components into separate folders for **reusability** and **maintainability**.</li><li>Utilizes **Utils** folder for common utility functions across the application.</li><li>Follows a **component-based** architecture for easy component isolation and management.</li></ul> |
| ⚡️ |  **Performance**  | <ul><li>Optimizes **image loading** with lazy loading and image size optimization.</li><li>Utilizes **pagination** for large data sets to improve loading times.</li><li>Implements **service worker** for offline capabilities and faster subsequent visits.</li></ul>                          |
| 🛡️  |   **Security**    | <ul><li>Secures API requests by **appending API key** to every request header.</li><li>Implements **error handling** for invalid requests and responses.</li><li>Ensures **data sanitization** to prevent XSS attacks.</li></ul>                                                                 |
| 📦  | **Dependencies**  | <ul><li>Manages dependencies using **npm** with a detailed **package-lock.json** file.</li><li>Includes key dependencies like **Ant Design**, **Axios**, and **React Router Dom** for core functionality.</li><li>Utilizes **gh-pages** for project deployment to GitHub Pages.</li></ul>        |

---

## 📁 Project Structure

```sh
└── React-movie-explorer/
    ├── README.md
    ├── movies.png
    ├── netlify.toml
    ├── package-lock.json
    ├── package.json
    ├── pnpm-debug.log
    ├── public
    │   ├── favicon.ico
    │   ├── images
    │   │   ├── logo.png
    │   │   ├── no_logo.jpg
    │   │   ├── no_photo.jpg
    │   │   └── no_poster.png
    │   ├── index.html
    │   └── manifest.json
    ├── shrinkwrap.yaml
    └── src
        ├── API
        │   ├── MoviesAPI.js
        │   └── PeopleAPI.js
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── components
        │   ├── ActorProfile
        │   │   └── ActorProfile.js
        │   ├── Alert
        │   │   └── Alert.js
        │   ├── Card
        │   │   ├── Card.css
        │   │   └── Card.js
        │   ├── Cast
        │   │   ├── Cast.css
        │   │   └── Cast.js
        │   ├── Discover
        │   │   └── Discover.js
        │   ├── Gallery
        │   │   └── Gallery.js
        │   ├── Genre
        │   │   └── Genre.js
        │   ├── ListGenres
        │   │   └── ListGenres.js
        │   ├── ListMovies
        │   │   ├── ListMovies.css
        │   │   └── ListMovies.js
        │   ├── Menu
        │   │   ├── Menu.css
        │   │   └── Menu.js
        │   ├── MovieDetails
        │   │   ├── MovieDetails.css
        │   │   └── MovieDetails.js
        │   ├── MovieMeta
        │   │   ├── MovieMeta.css
        │   │   └── MovieMeta.js
        │   ├── ProdCompanies
        │   │   └── ProdCompanies.js
        │   ├── ProfileDetails
        │   │   ├── ProfileDetails.css
        │   │   └── ProfileDetails.js
        │   ├── Reviews
        │   │   └── Reviews.js
        │   ├── ScrollToTop
        │   │   └── ScrollToTop.js
        │   ├── SearchMovies
        │   │   ├── SearchMovies.css
        │   │   └── SearchMovies.js
        │   ├── Similar
        │   │   └── Similar.js
        │   ├── Utils
        │   │   ├── Utils.js
        │   │   └── stringCase.js
        │   └── Videos
        │       ├── Videos.css
        │       └── Videos.js
        ├── config
        │   ├── axios.js
        │   └── config.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        └── serviceWorker.js
```

### 📂 Project Index

<details open>
	<summary><b><code>REACT-MOVIE-EXPLORER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the project structure defines dependencies for the "movies" project<br>- It ensures that the necessary packages like "@ant-design/icons", "antd", "axios", "lodash", and others are locked at specific versions to maintain consistency and stability within the codebase architecture<br>- This file plays a crucial role in managing the project's dependencies and ensuring smooth integration of external libraries.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/netlify.toml'>netlify.toml</a></b></td>
				<td>Redirects all incoming requests to the root URL with a 200 status code, ensuring a seamless user experience.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/shrinkwrap.yaml'>shrinkwrap.yaml</a></b></td>
				<td>- The `shrinkwrap.yaml` file in the project structure defines the dependencies and packages required for the codebase architecture<br>- It specifies key dependencies such as antd, axios, lodash, and react-router-dom, along with package details like versions and dependencies for specific modules<br>- This file plays a crucial role in managing and ensuring the stability of the project's dependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/package.json'>package.json</a></b></td>
				<td>- Manages dependencies and scripts for the React movie explorer project<br>- Handles package versions, build, testing, deployment, and development tools configuration<br>- Supports project deployment to GitHub Pages.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/index.css'>index.css</a></b></td>
				<td>- Define global typography styles for the project, ensuring consistent font rendering across all elements<br>- Set base styles for body and code elements to enhance readability and maintain a cohesive design language throughout the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/App.css'>App.css</a></b></td>
				<td>- Define the global styling for the project's UI components, ensuring consistency and a cohesive look and feel across the application<br>- The CSS file establishes typography, layout structure, alignment, and responsiveness for various screen sizes, enhancing user experience and visual appeal.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/App.test.js'>App.test.js</a></b></td>
				<td>- Verifies that the App component renders without issues by creating a temporary div element, rendering the App component within it, and then unmounting the component<br>- This test ensures the stability of the App component's rendering functionality within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/serviceWorker.js'>serviceWorker.js</a></b></td>
				<td>- Enables service worker registration for offline capabilities and faster subsequent visits in production<br>- Handles updating cached resources in the background and provides callbacks for update and success events<br>- Supports localhost checks and service worker validation<br>- Allows for service worker unregistration.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/App.js'>App.js</a></b></td>
				<td>- Manages the layout and routing for the React Movies App, displaying different components based on the URL path<br>- Integrates navigation, movie details, genres, and actor profiles seamlessly within the app's structure.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/index.js'>index.js</a></b></td>
				<td>Renders the main application component using React and initializes service worker registration for offline functionality.</td>
			</tr>
			</table>
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/config/axios.js'>axios.js</a></b></td>
						<td>- Enhances Axios requests by appending a config key to every request header<br>- This code file in src/config/axios.js plays a crucial role in the project architecture by ensuring that the API key is included in all outgoing requests<br>- This helps maintain consistency and security across API interactions.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/config/config.js'>config.js</a></b></td>
						<td>- Defines constants for API configuration, filters, pagination, colors, routes, image URLs, and error messages used throughout the project<br>- This file centralizes key values and settings, ensuring consistency and easy maintenance across the codebase.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>Utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Utils/Utils.js'>Utils.js</a></b></td>
								<td>- Implements utility functions for string manipulation, URL extraction, and age calculation<br>- Handles tasks like converting strings to URL-friendly formats, capitalizing text, and extracting information from URLs<br>- Additionally, provides a function to remove background images<br>- These utilities enhance the codebase's functionality by simplifying common operations across components.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Utils/stringCase.js'>stringCase.js</a></b></td>
								<td>- Enhances string formatting by converting text to title case, handling small words, intentional capitalization, and URLs<br>- This class extends the String object to provide a method for transforming strings into a more visually appealing title case format.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Card</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Card/Card.css'>Card.css</a></b></td>
								<td>- Define styles for interactive movie cards with hover effects, overlay transitions, and content details<br>- Ensure responsive design for various screen sizes, optimizing user experience.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Card/Card.js'>Card.js</a></b></td>
								<td>- Generates a movie card component displaying movie details and allowing users to click for more information<br>- Handles rendering of movie title, poster, rating, and overview with interactive elements<br>- Navigates to a detailed movie page upon user click, enhancing user experience within the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Genre</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Genre/Genre.js'>Genre.js</a></b></td>
								<td>- Generates dynamic genre-specific movie lists with infinite scrolling capability based on user interaction<br>- Utilizes React components to display movies categorized by genre, enhancing user experience through continuous content loading.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>SearchMovies</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/SearchMovies/SearchMovies.js'>SearchMovies.js</a></b></td>
								<td>- Enables users to search for movies with real-time suggestions and detailed information<br>- Handles user input, fetches movie data, and displays results elegantly<br>- Facilitates seamless navigation to selected movie details<br>- Enhances user experience by providing a dynamic and interactive movie search feature within the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/SearchMovies/SearchMovies.css'>SearchMovies.css</a></b></td>
								<td>- Define styling rules for movie search items and dropdown menu items, ensuring proper alignment and readability<br>- Adjust font sizes and spacing for different screen sizes, enhancing user experience.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ScrollToTop</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ScrollToTop/ScrollToTop.js'>ScrollToTop.js</a></b></td>
								<td>Enables smooth scrolling to the top of the page when navigating between routes in a React application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ListGenres</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ListGenres/ListGenres.js'>ListGenres.js</a></b></td>
								<td>- Generates and displays movie genres as clickable tags with random dark colors<br>- Links to genre-specific pages using React Router<br>- Utilizes configuration data for colors and routes.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ProdCompanies</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ProdCompanies/ProdCompanies.js'>ProdCompanies.js</a></b></td>
								<td>- Render a component displaying production companies' logos with tooltips, linking to their details<br>- Handles displaying up to 8 companies per page, optimizing performance.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Gallery</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Gallery/Gallery.js'>Gallery.js</a></b></td>
								<td>- Render a responsive image gallery component that displays a list of images with lightbox functionality<br>- The component dynamically paginates images and handles empty states gracefully<br>- Utilizes configuration settings for image sizes and error messages.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ProfileDetails</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ProfileDetails/ProfileDetails.css'>ProfileDetails.css</a></b></td>
								<td>- Define the styling for the profile details component, including the profile picture, metadata, and actor details<br>- Ensure proper layout and design for a visually appealing user interface<br>- Implement responsive design adjustments for optimal display on various screen sizes.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ProfileDetails/ProfileDetails.js'>ProfileDetails.js</a></b></td>
								<td>- Display detailed profile information and media content for a selected profile<br>- Includes basic details like name, gender, age, and biography, along with tabs for photos, cast, and crew information<br>- Utilizes lazy loading for improved performance<br>- Allows users to navigate through media content with pagination.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ListMovies</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ListMovies/ListMovies.js'>ListMovies.js</a></b></td>
								<td>- ListMovies component dynamically fetches and displays movies based on different criteria like trending, genre, or discovery<br>- It efficiently manages state updates and renders movie cards with smooth animations<br>- The component handles loading states and error messages gracefully, enhancing the user experience within the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ListMovies/ListMovies.css'>ListMovies.css</a></b></td>
								<td>Define styling rules for movie cards, loading spinner, and responsive design in the ListMovies component.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Menu</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Menu/Menu.css'>Menu.css</a></b></td>
								<td>- Define the styling for the menu header, logo, and responsive behavior in the project's CSS file located at src/components/Menu/Menu.css<br>- This file ensures the menu header remains fixed at the top, sets the logo size and padding, and adjusts menu item styling for optimal display.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Menu/Menu.js'>Menu.js</a></b></td>
								<td>- Defines the header menu component responsible for rendering the logo and search functionality in the project's user interface<br>- The component encapsulates the layout and navigation elements, enhancing the overall user experience by providing easy access to key features.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Cast</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Cast/Cast.css'>Cast.css</a></b></td>
								<td>Define styling for the Cast component to ensure proper alignment and responsiveness on different screen sizes within the project architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Cast/Cast.js'>Cast.js</a></b></td>
								<td>- Generates a dynamic cast display for movies, showcasing actors with their characters<br>- Utilizes React components and Ant Design for UI elements<br>- Handles image loading and navigation to individual actor pages<br>- Implements pagination for limited cast results.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Videos</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Videos/Videos.css'>Videos.css</a></b></td>
								<td>Define responsive video styling for the project, ensuring videos adapt well to various screen sizes.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Videos/Videos.js'>Videos.js</a></b></td>
								<td>- Render a dynamic video gallery component with modal playback functionality<br>- Display videos in a lightbox format with thumbnails, allowing users to play videos on click<br>- Utilize React hooks for state management and integrate with YouTube API for video playback<br>- Implement pagination for video list if provided.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Reviews</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Reviews/Reviews.js'>Reviews.js</a></b></td>
								<td>- Render a list of reviews with the option to expand for more content if available, utilizing the Ant Design library<br>- If reviews exist, display each review with the author's name, avatar, and content<br>- If no reviews are present, show an empty state message<br>- The component fetches configuration data from an external file for consistency.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Alert</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Alert/Alert.js'>Alert.js</a></b></td>
								<td>- Generates an alert component for displaying messages with specified title, message, and type<br>- The component utilizes the Ant Design library to render an alert box with an optional icon<br>- The main content is wrapped within a div element for styling purposes.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ActorProfile</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/ActorProfile/ActorProfile.js'>ActorProfile.js</a></b></td>
								<td>- Displays actor profile details, including breadcrumb navigation and error handling<br>- Fetches actor data from the API based on the provided ID<br>- Handles loading state and redirects to the home page if ID is missing<br>- Renders profile information and movie details if available, else shows an error message.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>MovieDetails</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/MovieDetails/MovieDetails.js'>MovieDetails.js</a></b></td>
								<td>- Manages movie details display, including info, cast, images, videos, reviews, and similar movies<br>- Handles loading states, error messages, and navigation<br>- Utilizes lazy loading for improved performance<br>- Integrates with external APIs for movie data retrieval<br>- Enhances user experience with dynamic content pagination.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/MovieDetails/MovieDetails.css'>MovieDetails.css</a></b></td>
								<td>- Define the styling for movie details, including layout, typography, and image display<br>- Ensure a consistent and visually appealing presentation of movie information, cast details, and production companies<br>- Implement responsive design for optimal viewing on various devices, adjusting layout and font sizes accordingly.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Discover</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Discover/Discover.js'>Discover.js</a></b></td>
								<td>- Enables users to discover new movies and TV shows by selecting filters such as year, sorting criteria, and genres<br>- The component dynamically updates results based on user selections, providing an interactive and personalized browsing experience<br>- This functionality enhances user engagement and facilitates exploration of diverse content offerings within the platform.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>MovieMeta</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/MovieMeta/MovieMeta.css'>MovieMeta.css</a></b></td>
								<td>Define styling for movie metadata components based on screen size and font styles to ensure consistent and visually appealing presentation across devices.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/MovieMeta/MovieMeta.js'>MovieMeta.js</a></b></td>
								<td>- Generates movie metadata display for React components, showcasing release date, runtime, budget, revenue, vote average, and spoken languages<br>- Utilizes CountUp for numerical animations and Flip for visual effects<br>- Organizes data in rows and columns for a clean presentation.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Similar</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/components/Similar/Similar.js'>Similar.js</a></b></td>
								<td>Render a list of similar movies using React components, enhancing user experience by displaying movie cards in a visually appealing manner.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>API</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/API/MoviesAPI.js'>MoviesAPI.js</a></b></td>
						<td>- Handles API requests for movie data including discovering movies, fetching popular movies, searching movies, retrieving movie details, and filtering movies by genre<br>- The file interacts with the Axios configuration to make HTTP requests to the movie API endpoints based on specified filters and parameters.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/src/API/PeopleAPI.js'>PeopleAPI.js</a></b></td>
						<td>- Retrieve basic profile details for people from the API by making a request to the specified endpoint<br>- If successful, return the response data; otherwise, throw an error indicating that the profile was not found.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- public Submodule -->
		<summary><b>public</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/public/index.html'>index.html</a></b></td>
				<td>- Defines the structure and content of the main HTML file for the Movies Explorer React App<br>- Sets up metadata, links to external resources, and defines Open Graph and Twitter card properties for social sharing<br>- Displays a message for users without JavaScript enabled and renders the root element for the React app.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-movie-explorer/blob/master/public/manifest.json'>manifest.json</a></b></td>
				<td>- Defines the manifest.json file for the React App, specifying essential details like the app's name, icons, start URL, display mode, theme color, and background color<br>- This file plays a crucial role in configuring the app's appearance and behavior when added to the project structure.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with React-movie-explorer, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### ⚙️ Installation

Install React-movie-explorer using one of the following methods:

**Build from source:**

1. Clone the React-movie-explorer repository:

```sh
❯ git clone https://github.com/amitpatil321/React-movie-explorer
```

2. Navigate to the project directory:

```sh
❯ cd React-movie-explorer
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### 🤖 Usage

Run React-movie-explorer using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

### 🧪 Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/amitpatil321/React-movie-explorer/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/amitpatil321/React-movie-explorer/issues)**: Submit bugs found or log feature requests for the `React-movie-explorer` project.
- **💡 [Submit Pull Requests](https://github.com/amitpatil321/React-movie-explorer/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/amitpatil321/React-movie-explorer
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/amitpatil321/React-movie-explorer/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=amitpatil321/React-movie-explorer">
   </a>
</p>
</details>
