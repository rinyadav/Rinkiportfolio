# Personal Portfolio Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Personal Portfolio Website

### 1.2 Website Description
A modern, interactive personal portfolio website showcasing professional skills, projects, experience, and achievements. The website serves as a comprehensive digital resume and professional presence for a frontend developer, inspired by contemporary portfolio design patterns.\n
### 1.3 Target Audience
Recruiters, potential employers, clients, collaborators, and professional network contacts.\n
## 2. Core Sections & Features

### 2.1 Hero / Introduction Section
- Personalized greeting: Hello, I'm [Your Name]
- Role/title displayed prominently: Frontend Developer | Designer | Problem Solver
- Display user photo or avatar
- Brief personal introduction tagline
- Call-to-Action buttons: View Projects, Download CV, Contact Me
- **3D Dot Particle Effect Background**: Animated 3D dot particles floating in the background, inspired by Screenshot 2026-01-07 161850.png. The effect should feature small glowing dots with subtle movement and depth, creating an immersive visual experience\n- Reference design: Use Screenshot2025-12-11 225606.png as visual inspiration for hero section layout and styling

### 2.2 About Me Section
- Short personal description or background text
- Personal journey or story
- Key strengths highlight\n- Notable achievements summary
- Skills and interests overview

### 2.3 Skills Section
**Technical Skills:**
- HTML, CSS, JavaScript
- React, Node.js, Flask
- Python, SQL
- Tools: Git, VS Code, Figma

**Soft Skills:**
- Communication
- Leadership
- Teamwork
- Problem-solving

Display format: Progress bars with gradient fills, skill logos, and skill badges

### 2.4 Featured Projects Gallery
**Project Filtering System:**
- Category filters: All, E-Commerce, Photography, Typography, Web Development, UI/UX Design, etc.
- Interactive filter buttons to sort projects by category
\n**Project Display:**
- Showcase 4-6 best projects in card/grid layout
- Each project card includes:
  - Project title
  - Category tag
  - Screenshot or thumbnail image
  - Brief description
  - Technologies used
  - Live demo link
  - GitHub repository link
- Hover animation effects for interactivity
- Smooth transitions when filtering projects

**Example Projects:**
- Task Manager (Category: Web Development)
- Gracious Garments (Category: E-Commerce)
- Additional projects with appropriate category tags

### 2.5 Experience & Timeline Section
**Display Format:**
- Interactive timeline visualization with vertical line connecting experience entries
- Alternating left-right card layout for visual interest
- Each experience card includes:
  - Company logo or icon
  - Job title/role
  - Company name
  - Employment duration (start date - end date or Present)
  - Location (city, country)
  - Key responsibilities (3-5 bullet points)
  - Technologies and tools used
  - Notable achievements or impact metrics\n
**Visual Elements:**\n- Timeline dots marking each position\n- Connecting line with gradient effect
- Card hover effects with slight elevation
- Date badges positioned on timeline
- Smooth scroll-triggered animations as timeline enters viewport

**Content Structure:**
- Most recent position displayed first (reverse chronological order)
- Clear visual distinction between current and past roles
- Expandable cards for detailed responsibility descriptions

### 2.6 Education Section
**Display Format:**
- Card-based layout with academic institution branding\n- Each education card includes:
  - Institution logo or icon
  - Degree type and field of study
  - University/College name
  - Graduation year or study duration
  - GPA or academic honors (if applicable)\n  - Relevant coursework (3-5 key courses)
  - Academic projects or thesis title\n  - Extracurricular activities or leadership roles

**Visual Elements:**
- Grid layout (2 columns on desktop, 1 column on mobile)
- Graduation cap icon or institution badge
- Color-coded borders for different degree levels
- Subtle background patterns or gradients
\n**Content Organization:**
- Ordered by completion date (most recent first)
- Clear hierarchy: Degree → Institution → Details
- Optional: Include certifications from educational platforms (Coursera, edX, etc.)

### 2.7 Resume Section
- Resume preview display
- Download CV button prominently placed
- One-click download functionality
\n### 2.8 Contact Section
- Contact form with fields: Name, Email, Message
- Gmail address
- LinkedIn profile link
- GitHub profile link\n- Location (city only)
- Social media links

## 3. Navigation & User Experience

### 3.1 Navigation Bar
- Fixed/sticky navigation bar at top
- Anchor links to all major sections:
  - Home
  - About
  - Skills\n  - Projects
  - Experience
  - Education
  - Contact
- Smooth scroll behavior when clicking nav links
- Mobile-responsive hamburger menu\n
### 3.2 Interactive Features
- Theme Toggle: Dark mode / Light mode switcher with persistent preference
- Smooth scrolling navigation
- Hover effects on interactive elements
- Scroll-triggered animations for section reveals\n- Loading animation on page load\n- Project filtering with smooth transitions\n- **3D Dot Particle Animation**: Interactive particle system in hero section background with floating dots that respond subtly to mouse movement

## 4. Technical Requirements

### 4.1 Responsive Layout
- Fully responsive design for desktop, tablet, and mobile devices
- Touch-friendly navigation for mobile users
- Adaptive grid layouts that reflow based on screen size
- Mobile-optimized project gallery

### 4.2 SEO & Performance
- Proper meta tags for search engines
- Google search visibility optimization
- Fast loading performance
- Optimized images and assets
- Clean, semantic HTML structure

### 4.3 Modern UI Styling\n- CSS utility classes (Tailwind CSS or similar framework recommended)
- Consistent spacing and alignment
- Modern design patterns and components

## 5. Design Style

### 5.1 Visual Approach
- Modern and professional aesthetic with clean layouts\n- Card-based design for projects and content sections
- Grid layout for project gallery with filtering capability
- Timeline visualization for experience section with interactive elements
- Card-based layout for education with institution branding
- Clear visual hierarchy for easy content scanning
- **3D particle effect in hero section only**: Animated dot particles creating depth and visual interest in the background

### 5.2 Color Scheme
- Primary color: Teal/Cyan (#14b8a6) for modern, tech-forward feel (inspired by reference image)
- Accent color: Vibrant orange (#f97316) for CTAs and highlights
- Dark mode: Deep charcoal background (#0f172a) with light text (#f1f5f9)
- Light mode: Clean white background (#ffffff) with dark text (#1e293b)
- Timeline elements: Gradient from primary to accent color
- Category tags: Use accent color variations for different types
- **Particle dots**: Subtle glow with primary color tint, varying opacity for depth effect

### 5.3 Visual Details
- Rounded corners (8px-12px) for cards and buttons
- Subtle shadows for depth and card elevation (0 4px 6px rgba(0,0,0,0.1))
- Smooth transitions (300ms ease-in-out) on all interactive elements
- Icon style: Line icons with consistent 2px stroke width
- Progress bars with gradient fills for skill visualization
- Timeline dots with glow effect on hover
- Hover effects: slight scale (1.05) and shadow increase on cards
- **3D dot particles**: Small glowing dots (2-4px diameter) with subtle floating animation, varying sizes and opacity to create depth perception

### 5.4 Typography
- Headings: Bold, modern sans-serif font (e.g., Inter, Poppins)
- Body text: Clean, readable sans-serif with 1.6 line height
- Code snippets: Monospace font (e.g., Fira Code) for technical content
- Timeline dates: Smaller, uppercase font with letter spacing
\n### 5.5 Layout Structure
- Clearly separated sections with consistent padding\n- Maximum content width for readability (1200px-1400px)
- Generous whitespace between sections
- Centered content alignment for hero and major sections
- Timeline: Vertical center line with alternating content cards
- Education grid: 2 columns on desktop, responsive stacking on mobile

## 6. Reference Files
- Design inspiration image: Screenshot 2025-12-11 225606.png (used for hero section layout, color scheme, and overall modern aesthetic)
- 3D particle effect reference: Screenshot 2026-01-07 161850.png (used for animated dot particle background effect in hero section)