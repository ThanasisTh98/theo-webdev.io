
# Thanasis Theo - Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills as a web developer and serves as a learning experience with GitHub and modern web development practices.

🌐 **Live Site**: https://thanasisth98.github.io/theo-webdev.io/


## Project Structure

```
theo-webdev.io/
├── index.html          # Homepage - Experience & Projects showcase
├── about.html          # About page - Personal story & skills
├── resume.html         # Professional resume with detailed experience
├── projects.html       # Projects showcase (coming soon)
│   ├── Codepen         # Using codepen to showcase random components i've created on a whim
│   ├── Cafe-Royal      # Redesigning my cousins cafe website to more modern standards 
│   ├── Going out       # Re-imagining a website i created for my first year at uni 
└──
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
- [x] Choose framework (Bootstrap 5)
- [x] Create basic portfolio structure
- [x] Setup development environment with live-server
- [x] Design consistent navigation across all pages
- [x] Implement About page with personal story
- [x] Create professional Resume page
- [x] Add Phosphor icons throughout the site
- [x] Integrate GitHub API for dynamic commit dates
- [x] Add live London time display
- [x] Implement responsive design
- [ ] Complete projects showcase page
- [ ] Add project case studies with live demos
- [ ] Implement contact form functionality
- [ ] Add dark/light theme toggle
- [ ] Optimize for SEO and accessibility
- [ ] Add smooth animations and transitions
- [ ] Create downloadable PDF resume

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Thanasis Theo**
- GitHub: [@ThanasisTh98](https://github.com/ThanasisTh98)
- Portfolio: [theo-webdev.io](https://thanasisth98.github.io/theo-webdev.io/)




