# 📸 Adasa — Photography Knowledge Platform

> **Adasa (عدسة)** is a modern Arabic photography platform that helps photography enthusiasts learn, explore, and improve their photography skills through organized educational articles and practical content.

🔗 **Live Demo:** [Adasa](https://adasa-eta-rust.vercel.app/)
💻 **GitHub Repository:** [Adasa](https://github.com/ma7moudwa1id/Adasa)

---

## 📖 About The Project

**Adasa** is a frontend web application built for photography enthusiasts and learners.

The platform provides educational photography content organized into different categories, making it easier for users to discover articles based on their interests.

Each article provides useful information such as:

* Article title and description
* Full article content
* Author information
* Publication date
* Reading time
* Category
* Related tags
* Featured article status

The project focuses on building a clean, responsive, and user-friendly experience for browsing photography content.

---

## ✨ Features

### 🏠 Home Page

* Modern landing page for the platform
* Featured photography content
* Latest articles
* Selected articles
* Photography categories
* Clear navigation between different sections

### 📰 Blog

* Browse all photography articles
* Organized article cards
* Article categories
* Reading time information
* Publication dates
* Author information
* Article tags

### 🗂️ Categories

Articles are organized into different photography categories, including:

* 📸 Portrait Photography
* 💡 Lighting
* 🌄 Landscape Photography
* ⚙️ Photography Techniques
* 📷 Photography Equipment

Users can browse articles based on their selected category.

### 📄 Article Details

Each article has its own dynamic page containing:

* Article title
* Featured image
* Author information
* Publication date
* Reading time
* Category
* Tags
* Full article content

Articles use dynamic URLs based on their category and slug.

### ⭐ Featured Articles

Selected articles can be marked as featured content and displayed separately from regular articles.

### 👤 Author Information

Articles include author details such as:

* Author name
* Author avatar
* Author role

This provides additional context about the content creator.

### 🏷️ Article Tags

Each article can contain multiple tags related to its topic, making the content more structured and easier to understand.

### 🚫 404 Not Found Page

The application includes a custom Not Found page for invalid routes.

---

## Routing

The project uses **React Router** to handle application navigation and dynamic routes.

Main routes include:

```text
/
├── /blog
├── /blog/:category
├── /blog/:category/:slug
├── /about
└── *
```

### Route Overview

| Route                   | Description                   |
| ----------------------- | ----------------------------- |
| `/`                     | Home page                     |
| `/blog`                 | All articles                  |
| `/blog/:category`       | Articles filtered by category |
| `/blog/:category/:slug` | Article details               |
| `/about`                | About the platform            |
| `*`                     | 404 Not Found                 |

---

## 🛠️ Tech Stack

The project was built using modern frontend technologies:

| Technology       | Purpose                       |
| ---------------- | ----------------------------- |
| **React**        | Building the user interface   |
| **Vite**         | Development and build tool    |
| **React Router** | Application routing           |
| **Tailwind CSS** | Styling and responsive design |
| **Font Awesome** | Icons                         |
| **ESLint**       | Code quality and consistency  |

---

## 🧩 Project Architecture

The project follows a component-based React architecture.

The application is divided into reusable components and page-level components.

```text
src/
├── assets/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── MainHome/
│   ├── MainBlog/
│   ├── LatestArticles/
│   ├── ChosenArticles/
│   ├── Categories/
│   ├── AllArticles/
│   ├── BlogDetails/
│   ├── OurNews/
│   ├── AboutComp/
│   └── NotFound/
│
├── pages/
│   ├── home/
│   ├── blog/
│   ├── details-page/
│   ├── About/
│   └── notFoundPage/
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

This structure helps keep the application organized and makes individual sections easier to maintain and reuse.

---

## 📚 Content Structure

Article data is structured with information such as:

```text
Article
├── Title
├── Description
├── Content
├── Category
├── Slug
├── Author
│   ├── Name
│   ├── Avatar
│   └── Role
├── Image
├── Date
├── Reading Time
├── Tags
└── Featured
```

This structure allows the application to dynamically generate article pages and category-based content.

---

## 🎨 UI & User Experience

The interface was designed with a focus on:

* Clean and modern visual design
* Easy content discovery
* Clear navigation
* Organized article presentation
* Responsive layouts
* Consistent typography and spacing
* Reusable UI components
* Simple reading experience

The goal is to make photography content easy to browse and comfortable to read.

---

## 📱 Responsive Design

Adasa is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

The layout adapts to different screen sizes using responsive styling with Tailwind CSS.

---

## 🚀 Getting Started

To run the project locally, follow the steps below.

### 1. Clone the repository

```bash
git clone https://github.com/ma7moudwa1id/Adasa.git
```

### 2. Navigate to the project directory

```bash
cd Adasa
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📦 Build For Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔍 What I Practiced

Through this project, I practiced and improved my skills in:

* React component development
* Component reusability
* React Router
* Dynamic routing
* Dynamic article pages
* Category-based navigation
* Organizing structured content
* Responsive web design
* Tailwind CSS
* Building reusable UI sections
* Frontend project structure
* Creating a content-focused user experience

---


## 🌐 Live Demo

Experience the project online:

**[Visit Adasa](https://adasa-eta-rust.vercel.app/)**

---

## 👨‍💻 Author

### Mahmoud Walid

Frontend Developer interested in building modern, responsive, and user-friendly web applications.

* GitHub: [@ma7moudwa1id](https://github.com/ma7moudwa1id)
* Portfolio: [Mahmoud Walid](https://ma7moudwa1id.github.io/)
---

## 📄 License

This project is created for educational and portfolio purposes.

---

⭐ **If you like this project, feel free to give it a star on GitHub!**
