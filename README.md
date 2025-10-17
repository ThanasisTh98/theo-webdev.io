

# Thanasis Theo - Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills as a web developer and serves as a learning experience with GitHub and modern web development practices.

🌐 **Live Site**: https://bit.ly/theo-webdev

![Portfolio Banner](assets/Github.png)

## Project Structure

```
theo-webdev.io/
├── index.html                  # Homepage - Everythign in a snapshot
├── about.html                  # About page - Story, skills and fun facts lol
├── contact.html                # Contact page - Get in touch information
├── project.html                # All my projects showcase page
├── projects/
│   └── university-website.html # University website project details
│   └── project-cafe-royal.html # Cafe Royal redesign
│   └── codepen-io              # Link to my Codepen profile
│   └── going-out-remake        # [not yet published on site] Remaking my old website I made for a university project
├── assets/                     # Images, documents, and media files
├── css/                        # Stylesheets and design system
├── js/                         # JavaScript components and utilities
└── data/                       # JSON data files, storing the data for each js component
```
## 🚀 Unique Architecture

This portfolio uses a **custom component-based architecture** built with vanilla JavaScript and JSON data sources - no frameworks needed! 

### Dynamic Content Injection
Instead of traditional static HTML, I've created a modular system where:
- **JSON files** store all content data (`skills-data.json`, `about-data.json`, `project-card-data.json` etc.)
- **JavaScript components** (`skills.js`, `about.js`, `projects.js`, `navigation.js` etc.) fetch data and generate HTML
- **Dynamic injection** happens at runtime, populating placeholder divs with fully rendered content

### My reasoning
I know this isn't the standard way of doing things, but in my current role as Web Developer this is how we've been creating components.
- Additionally, this allows me to come into the JSON files and change the data to more up to date one or add more card to sections like the "Projects"
It's my own take on component architecture using pure vanilla JS - sometimes the best solutions are the simplest ones!

## 🗺️ Roadmap

- [x] Setup GitHub repository
- [x] Bootstrap 5 for styling
- [x] Create basic portfolio structure
- [x] Design consistent navigation across all pages
- [x] Implement About page with personal story
- [x] Create professional Resume page
- [x] Add Phosphor icons for free use icons
- [x] Integrate GitHub API for dynamic commit dates
- [x] Add live London time display (my local time)
- [x] Implement responsive design
- [x] Complete projects showcase page
- [x] Add smooth animations and transitions
- [x] Create downloadable PDF resume
- [ ] Add project "Going out" to project page
- [ ] Add dark/light theme toggle
- [ ] Add smooth scroll


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Thanasis Theo**
- GitHub: [@ThanasisTh98](https://github.com/ThanasisTh98)
- Portfolio: [theo-webdev.io](https://thanasisth98.github.io/theo-webdev.io/)




