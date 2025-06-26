# Healthcare Network Graph - Interactive HCP Visualization

A React-based interactive network graph application for visualizing relationships among Healthcare Professionals (HCPs). This application allows users to search for HCPs, explore their connections, and view detailed professional information through an intuitive graph interface.

## 🎯 Project Overview

This project fulfills the **Front-End Technical Challenge: Interactive Healthcare Network Graph** requirements by creating a comprehensive visualization tool that showcases relationships among healthcare professionals in an interactive, user-friendly interface.

## ✨ Features Implemented

### 🔍 Search & Highlight
- **Smart Search Bar**: Real-time search functionality for HCP names with autocomplete
- **Visual Highlighting**: Selected HCPs are automatically centered and highlighted in the graph
- **Search Results**: Dropdown with HCP avatars, names, and professional details
- **Redux Integration**: Centralized search state management

### 🧠 Network Visualization
- **Interactive Graph**: Built with `react-force-graph-2d` for smooth, physics-based interactions
- **Central Node Layout**: Main searched HCP positioned at the center with connections radiating outward
- **Connection Paths**: Visual representation of professional relationships (co-authorship, shared workplace, etc.)
- **Optimized Physics**: Enhanced D3 force simulation with proper link distances and collision detection
- **Responsive Design**: Graph adapts to different screen sizes and layouts

### 🖱️ Interactivity & UI Behaviors
- **Node Interaction**: Click on any HCP node to view comprehensive profile information
- **Connection Details**: Click on links between nodes to see detailed relationship information
- **Hover Effects**: Visual feedback and tooltips on hover for enhanced user experience
- **Drag & Drop**: Nodes can be dragged and repositioned while maintaining graph stability
- **Sidebar Integration**: Connection details appear in a dedicated sidebar panel

### 📊 Data Visualization
- **Comprehensive Profiles**: Education, work experience, publications, and professional metrics
- **Statistics Display**: Patients served, success rates, peer connections, and following counts
- **Professional Information**: Specialty, bio, location, and contact details
- **Rich Media**: Avatar images and professional photos

### 🎨 Styling & Design
- **Modern UI**: Clean, professional healthcare-appropriate design
- **Ant Design Integration**: Consistent, accessible UI components
- **Tailwind CSS**: Responsive styling and utility-first approach
- **Accessibility**: Proper contrast ratios, keyboard navigation, and screen reader support
- **Professional Color Scheme**: Healthcare industry-appropriate color palette

## 🛠️ Technical Stack

### Core Technologies
- **React 19**: Latest React with modern hooks and concurrent features
- **Vite**: Fast build tool and development server
- **JavaScript (ES2020+)**: Modern JavaScript with latest features

### State Management
- **Redux Toolkit**: Centralized state management with modern Redux patterns
- **React Redux**: React bindings for Redux integration

### UI Framework & Styling
- **Ant Design 5.26**: Professional UI component library
- **Ant Design Icons**: Comprehensive icon set
- **Tailwind CSS 4.1**: Utility-first CSS framework with latest features
- **PostCSS**: CSS processing and optimization

### Graph Visualization
- **react-force-graph-2d**: Interactive network graph visualization
- **D3.js**: Underlying physics simulation and graph algorithms

### Development Tools
- **ESLint**: Code linting with React-specific rules
- **React Hooks ESLint Plugin**: Hooks-specific linting
- **React Refresh**: Fast refresh during development

## 📁 Project Structure
healtcare/
├── public/
│   ├── images/           # HCP profile images
│   │   ├── 21.jpg
│   │   ├── 24.jpg
│   │   ├── 35.jpg
│   │   ├── 37.jpg
│   │   ├── 40.jpg
│   │   └── 42.jpg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ConnectionsGraph.jsx    # Main graph visualization
│   │   ├── ConnectionDetails.jsx   # Connection info sidebar
│   │   ├── Header.jsx             # Search bar and navigation
│   │   ├── Sidebar.jsx            # Left navigation menu
│   │   ├── MainContent.jsx        # Main content container
│   │   ├── ProfileCard.jsx        # HCP profile display
│   │   ├── ProfileDetails.jsx     # Detailed profile view
│   │   ├── StatsCard.jsx          # Statistics display
│   │   ├── AboutSection.jsx       # About information
│   │   └── EducationSection.jsx   # Education details
│   ├── store/
│   │   ├── index.js               # Redux store configuration
│   │   └── slices/
│   │       ├── hcpSlice.js        # HCP data management
│   │       └── hcpProfileDetailsSlice.js # Profile details
│   ├── config/                    # Configuration files
│   ├── hooks/                     # Custom React hooks
│   ├── assets/                    # Static assets
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # Application entry point
│   ├── index.css                  # Global styles
│   └── App.css                    # Component-specific styles
├── data/
│   └── mockdata.json              # Mock HCP data
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
└── index.html                     # HTML template


## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 16 or higher
- **npm**: Version 7 or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd healtcare

# Install dependencies
npm install

# Start development server
npm run dev

# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```
## 🎯 Key Components
### ConnectionsGraph.jsx
The core visualization component featuring:

- D3 Force Simulation : Optimized physics with proper link distances (150px)
- Node Collision Detection : Prevents node overlap with 35px radius
- Interactive Handlers : Click and hover events for nodes and links
- Dynamic Sizing : Responsive graph dimensions
- Redux Integration : Connected to HCP and search state
### ConnectionDetails.jsx
Sidebar component displaying:

- Connection Information : Type, strength, and relationship details
- HCP Profiles : Source and target professional information
- Interactive Controls : Close functionality and navigation
- Professional Stats : Metrics and performance indicators
### Header.jsx
Search interface featuring:

- Real-time Search : Instant HCP name lookup
- Autocomplete : Dropdown with avatars and details
- Redux Actions : Integrated search state management
- Responsive Design : Mobile-friendly search interface
## 📊 Data Structure
The application uses comprehensive HCP data including:

{
  id: "unique-identifier",
  name: "Dr. John Smith",
  title: "Cardiologist",
  location: "New York, NY",
  avatar: "/images/profile.jpg",
  peers: 150,
  following: 89,
  patientsServed: 1200,
  successRate: 95.5,
  specialty: "Cardiovascular Surgery",
  bio: "Experienced cardiologist...",
  education: [...],
  workExperience: [...],
  publications: [...]
}

## 🎨 Design Features
- Professional Healthcare Theme : Clean, medical industry-appropriate styling
- Responsive Layout : Adapts to desktop, tablet, and mobile devices
- Accessibility Compliant : WCAG 2.1 AA standards
- Interactive Feedback : Smooth transitions and hover states
- Modern UI Patterns : Card-based layouts and intuitive navigation
## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins:

// vite.config.js
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

## 📱 Deployment
### Build Process
# Create optimized production build
npm run build

# Test production build locally
npm run preview

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- React Force Graph : Excellent graph visualization library
- Ant Design Team : Comprehensive UI component library
- Redux Toolkit : Simplified state management
- Vite Team : Fast and modern build tool
- Healthcare Community : Inspiration for this visualization tool