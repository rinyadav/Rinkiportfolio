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
- **3D Dot Particle Effect Background**: Animated 3D dot particles floating in the background, inspired by Screenshot 2026-01-07 161850.png. The effect should feature small glowing dots with subtle movement and depth, creating an immersive visual experience
- **3D Floating Doodle Character**: Add the cute teal bear character from Screenshot 2026-01-07 165345.png as a persistent 3D floating doodle. The bear should be positioned prominently in the hero section and remain visible across all pages as a floating element. The character features a friendly smile, round ears with pink inner details, and a small leaf accent on top. The doodle should have gentle floating animation with rotation and subtle bounce effects to create an engaging, welcoming atmosphere that aligns with the frontend development theme
- Reference design: Use Screenshot2025-12-11 225606.png as visual inspiration for hero section layout and styling

### 2.2 About Me Section
- Short personal description or background text
- Personal journey or story
- Key strengths highlight
- Notable achievements summary
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
- Teamwork\n- Problem-solving
\nDisplay format: Progress bars with gradient fills, skill logos, and skill badges

### 2.4 Featured Projects Gallery
**Project Filtering System:**
- Category filters: All, E-Commerce, Photography, Typography, Web Development, UI/UX Design, etc.\n- Interactive filter buttons to sort projects by category

**Project Display:**
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
  - Employment duration (start date - end date or Present)\n  - Location (city, country)
  - Key responsibilities (3-5 bullet points)
  - Technologies and tools used
  - Notable achievements or impact metrics

**Visual Elements:**
- Timeline dots marking each position
- Connecting line with gradient effect\n- Card hover effects with slight elevation
- Date badges positioned on timeline
- Smooth scroll-triggered animations as timeline enters viewport
\n**Content Structure:**
- Most recent position displayed first (reverse chronological order)
- Clear visual distinction between current and past roles
- Expandable cards for detailed responsibility descriptions

### 2.6 Education Section
**Display Format:**
- Card-based layout with academic institution branding
- Each education card includes:
  - Institution logo or icon
  - Degree type and field of study
  - University/College name
  - Graduation year or study duration
  - GPA or academic honors (if applicable)
  - Relevant coursework (3-5 key courses)
  - Academic projects or thesis title
  - Extracurricular activities or leadership roles

**Visual Elements:**
- Grid layout (2 columns on desktop, 1 column on mobile)
- Graduation cap icon or institution badge\n- Color-coded borders for different degree levels
- Subtle background patterns or gradients

**Content Organization:**
- Ordered by completion date (most recent first)
- Clear hierarchy: Degree → Institution → Details
- Optional: Include certifications from educational platforms (Coursera, edX, etc.)

### 2.7 Resume Section
**Resume Display:**
- Display resume content directly on the page (not as an embedded image)
- Resume content should be rendered as styled HTML/text matching the website theme
- Content structure based on Screenshot 2026-01-07 170144.png:\n  - Header: Name (Rinki Rajbahadur Yadav), Email (rv192006@gmail.com), Contact Number, LinkedIn profile link
  - Education Qualifications table with columns: College Name, Course, Year of Passing, Percentage
  - Additional Certifications section (bullet points)
  - Academic and Extracurricular Achievements section (bullet points)
  - Research Project section (bullet points)
  - Personal Details section (bullet points)
- Styled to match the overall website design with consistent typography, colors, and spacing
\n**Download Functionality:**
- Download CV button prominently placed
- When clicked, generates and downloads a PDF version of the resume
- PDF should contain the same content displayed on the page, formatted professionally
- PDF styling should maintain website theme consistency

### 2.8 Contact Section
- Contact form with fields: Name, Email, Message
- Gmail address\n- LinkedIn profile link
- GitHub profile link
- Location (city only)
- Social media links\n\n## 3. Navigation & User Experience

### 3.1 Navigation Bar
- Fixed/sticky navigation bar at top\n- Anchor links to all major sections:\n  - Home
  - About
  - Skills
  - Projects
  - Experience
  - Education
  - Contact
- Smooth scroll behavior when clicking nav links
- Mobile-responsive hamburger menu

### 3.2 Interactive Features
- Theme Toggle: Dark mode / Light mode switcher with persistent preference
- Smooth scrolling navigation
- Hover effects on interactive elements
- Scroll-triggered animations for section reveals
- Loading animation on page load
- Project filtering with smooth transitions
- **3D Dot Particle Animation**: Interactive particle system in hero section background with floating dots that respond subtly to mouse movement
- **Persistent 3D Floating Doodle**: The cute teal bear character (Screenshot 2026-01-07 165345.png) floats continuously across all pages with smooth animation, gentle rotation, and subtle scale changes. The doodle remains visible as users navigate through different sections, creating a consistent and playful atmosphere throughout the entire website

## 4. Technical Requirements

### 4.1 Responsive Layout
- Fully responsive design for desktop, tablet, and mobile devices
- Touch-friendly navigation for mobile users
- Adaptive grid layouts that reflow based on screen size
- Mobile-optimized project gallery
- Floating doodle adapts position and scale for different screen sizes

### 4.2 SEO & Performance
- Proper meta tags for search engines
- Google search visibility optimization
- Fast loading performance
- Optimized images and assets
- Clean, semantic HTML structure

### 4.3 Modern UI Styling
- CSS utility classes (Tailwind CSS or similar framework recommended)
- Consistent spacing and alignment
- Modern design patterns and components
\n### 4.4 PDF Generation
- Client-side PDF generation functionality for resume download
- PDF should accurately reflect the styled resume content displayed on the page
- Maintain formatting, typography, and layout consistency in PDF output

## 5. Design Style\n
### 5.1 Visual Approach
- Modern and professional aesthetic with clean layouts
- Card-based design for projects and content sections
- Grid layout for project gallery with filtering capability
- Timeline visualization for experience section with interactive elements
- Card-based layout for education with institution branding
- Clear visual hierarchy for easy content scanning
- **3D particle effect in hero section only**: Animated dot particles creating depth and visual interest in the background
- **Persistent 3D floating doodle across all pages**: Cute teal bear character (Screenshot 2026-01-07 165345.png) with friendly expression, round features, pink cheek accents, and leaf detail. The character floats continuously throughout the entire website, maintaining visibility across all sections and pages with smooth floating animation

### 5.2 Color Scheme
- Primary color: Teal/Cyan (#14b8a6) for modern, tech-forward feel (inspired by reference image)
- Accent color: Vibrant orange (#f97316) for CTAs and highlights
- Dark mode: Deep charcoal background (#0f172a) with light text (#f1f5f9)
- Light mode: Clean white background (#ffffff) with dark text (#1e293b)
- Timeline elements: Gradient from primary to accent color
- Category tags: Use accent color variations for different types
- **Particle dots**: Subtle glow with primary color tint, varying opacity for depth effect
- **Floating bear doodle**: Teal body color matching primary theme, pink accents for cheeks and inner ears, soft shadows for 3D depth, subtle glow effect to enhance visibility across different page backgrounds

### 5.3 Visual Details
- Rounded corners (8px-12px) for cards and buttons
- Subtle shadows for depth and card elevation (0 4px 6px rgba(0,0,0,0.1))
- Smooth transitions (300ms ease-in-out) on all interactive elements
- Icon style: Line icons with consistent 2px stroke width
- Progress bars with gradient fills for skill visualization
- Timeline dots with glow effect on hover
- Hover effects: slight scale (1.05) and shadow increase on cards
- **3D dot particles**: Small glowing dots (2-4px diameter) with subtle floating animation, varying sizes and opacity to create depth perception
- **Persistent 3D floating bear doodle**: Medium-sized (100-140px on desktop, 60-80px on mobile) cute character with continuous smooth floating motion across all pages (vertical movement 12-18px range), gentle rotation (5-10 degrees), subtle scale pulsing (0.98-1.02), and soft drop shadow for 3D effect. The doodle maintains consistent animation and visibility throughout user navigation

### 5.4 Typography
- Headings: Bold, modern sans-serif font (e.g., Inter, Poppins)
- Body text: Clean, readable sans-serif with 1.6 line height
- Code snippets: Monospace font (e.g., Fira Code) for technical content
- Timeline dates: Smaller, uppercase font with letter spacing
- Resume content: Professional, readable font matching website typography

### 5.5 Layout Structure
- Clearly separated sections with consistent padding\n- Maximum content width for readability (1200px-1400px)
- Generous whitespace between sections
- Centered content alignment for hero and major sections
- Timeline: Vertical center line with alternating content cards
- Education grid: 2 columns on desktop, responsive stacking on mobile
- **Resume section**: Full-width content area with structured layout matching Screenshot 2026-01-07 170144.png format
- **Floating bear doodle positioning**: Positioned initially in hero section (right side or near avatar), then follows user scroll with smooth parallax effect, remaining visible but non-obstructive across all pages. On mobile, doodle scales down and positions in corner to preserve content readability

## 6. Reference Files
- Design inspiration image: Screenshot 2025-12-11 225606.png (used for hero section layout, color scheme, and overall modern aesthetic)
- 3D particle effect reference: Screenshot 2026-01-07 161850.png (used for animated dot particle background effect in hero section)
- 3D floating doodle character: Screenshot 2026-01-07 165345.png (cute teal bear character used as persistent floating mascot across all pages)
- Resume content reference: Screenshot 2026-01-07 170144.png (used for resume section content structure and information layout)