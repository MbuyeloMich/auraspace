# 🌌 AuraSpace - Interactive 3D Solar System

<div align="center">

![AuraSpace Banner](https://img.shields.io/badge/AuraSpace-3D%20Solar%20System-blueviolet?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=)

**An immersive WebGL-powered 3D visualization of our Solar System with real-time NASA data**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_AuraSpace-success?style=for-the-badge)](https://mbuyelomich.github.io/auraspace/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/MbuyeloMich/auraspace)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.181.1-000000?style=flat-square&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-Enabled-990000?style=flat-square&logo=webgl&logoColor=white)

[Features](#-features) • [Demo](#-live-demo) • [Quick Start](#-quick-start) • [Usage](#-usage) • [Architecture](#-system-architecture)

---

</div>

## 📖 About AuraSpace

**AuraSpace** is an interactive, educational 3D Solar System simulator that brings space exploration to your browser. Built with cutting-edge web technologies, it offers a scientifically accurate, visually stunning journey through our cosmic neighborhood.

### 🎯 Project Goals
- **Educational**: Provide accurate NASA planetary data for learning
- **Interactive**: Intuitive controls and smooth camera animations
- **Performant**: 60 FPS on mid-range hardware using WebGL optimization
- **Accessible**: Keyboard shortcuts and responsive design

### 👨‍💻 Developer
**Mbuyelo Mich** - Full Stack Developer  
🔗 [GitHub](https://github.com/MbuyeloMich) | 💼 [LinkedIn](#) | 📧 [Email](#)

**Sole Contributor & Maintainer of AuraSpace**

---

## 🚀 Live Demo

<div align="center">

### **[🌐 Launch AuraSpace →](https://mbuyelomich.github.io/auraspace/)**

*Experience the cosmos in your browser*

</div>

---

## 📸 Screenshots

> **Note**: Replace placeholder images with actual screenshots after deployment

<div align="center">

### Solar System Overview
![Solar System View](https://via.placeholder.com/800x450/0c0c1d/61dafb?text=Full+Solar+System+View+-+8+Planets+with+Orbits)

### Planet Focus Mode
![Earth Close-up](https://via.placeholder.com/800x450/0c0c1d/4169E1?text=Earth+with+Atmosphere+Glow+%26+Moon)

### Interactive UI
![UI Controls](https://via.placeholder.com/800x450/0c0c1d/27ae60?text=Glass+Morphism+UI+%2B+Real-time+Stats)

</div>

---

## ✨ Features

### 🎯 Core Features
- 🪐 **8 Realistic Planets** - Mercury to Neptune with NASA data
- 🌙 **5 Major Moons** - Luna, Io, Europa, Ganymede, Callisto
- ☀️ **Dynamic Sun** - Realistic lighting and emission
- 🪐 **Saturn's Rings** - Beautiful ring system
- ☄️ **2,000 Asteroids** - Procedurally generated asteroid belt

### 🎨 Visual Effects
- ✨ **Atmosphere Glow** - Custom GLSL shaders
- 🌟 **5,000 Stars** - Immersive starfield
- 🛤️ **Orbital Trails** - Visualize planet paths
- 🏷️ **Planet Labels** - HTML overlays with data
- 📊 **FPS Counter** - Real-time performance monitoring

### 🕹️ Interactive Controls
- 🎮 **Smooth Camera** - Orbit controls with damping
- 🎯 **Planet Focus** - Click or press 1-8 to select
- ⏯️ **Time Control** - Adjust speed (0.5x to 5x)
- 📸 **Screenshot** - Capture high-quality images
- 🗺️ **Minimap** - Top-down 2D view

### 📊 Educational Features
- 📈 **Stats Panel** - Real-time planetary data
- 📅 **Simulation Date** - Track virtual time
- 📝 **Info Panels** - Detailed planet facts
- 🔬 **NASA Data** - Accurate orbital periods

### 🌍 User Features
- 📍 **GPS Location** - Real-time coordinates
- ⏰ **Live Clock** - Current date and time
- 🎨 **Glass Morphism UI** - Modern transparent design

---

## 🏗️ System Architecture

### Application Flow Diagram

```mermaid
flowchart TB
    Start([User Opens App]) --> Load[Load Assets & Textures]
    Load --> Init[Initialize Three.js Scene]
    Init --> Render{Render Loop 60 FPS}
    
    Render --> Input[Process User Input]
    Input --> Camera[Update Camera Position]
    Camera --> Physics[Calculate Orbital Physics]
    Physics --> UI[Update UI State]
    UI --> Draw[Draw Frame to Canvas]
    Draw --> Render
    
    Input --> |Keys 1-8| Focus[Focus on Planet]
    Input --> |Space| Pause[Toggle Pause]
    Input --> |Arrows| Speed[Change Speed]
    Input --> |O,L,M,A| Toggle[Toggle Features]
    
    Focus --> Camera
    Pause --> Physics
    Speed --> Physics
    Toggle --> UI
    
    style Start fill:#61dafb,stroke:#333,color:#000
    style Render fill:#f1c40f,stroke:#333,color:#000
    style Draw fill:#27ae60,stroke:#333,color:#fff
```

### Component Architecture

```mermaid
graph TB
    A[🌐 App.jsx<br/>State Management<br/>Event Handlers] --> B[🎨 Canvas<br/>Three.js WebGL<br/>Renderer]
    A --> C[🎮 UI Layer<br/>React Components<br/>HTML Overlays]
    
    B --> D[☀️ Sun.jsx<br/>Point Light<br/>Emissive Material]
    B --> E[🪐 Planet.jsx x8<br/>Textured Spheres<br/>Orbital Motion]
    B --> F[☄️ AsteroidBelt.jsx<br/>Instanced Rendering<br/>2000 Objects]
    B --> G[✨ Stars<br/>Background Sphere<br/>5000 Points]
    B --> H[🎥 OrbitControls<br/>Camera System<br/>User Interaction]
    
    E --> I[🌙 Moon.jsx x5<br/>Satellite Orbits<br/>Synchronized Motion]
    E --> J[🌍 AtmosphereGlow.jsx<br/>Custom GLSL Shader<br/>Rim Lighting]
    E --> K[🏷️ PlanetLabel.jsx<br/>HTML Overlay<br/>Distance Info]
    E --> L[🛤️ OrbitTrail.jsx<br/>Line Geometry<br/>Circular Path]
    
    C --> M[📊 StatsPanel.jsx<br/>Planetary Data<br/>NASA Facts]
    C --> N[📝 InfoPanel.jsx<br/>Detailed Info<br/>On Selection]
    C --> O[🗺️ Minimap.jsx<br/>Canvas 2D<br/>Top-Down View]
    C --> P[📍 UserLocation.jsx<br/>GPS API<br/>Live Clock]
    C --> Q[📸 ScreenshotButton.jsx<br/>Canvas Capture<br/>PNG Export]
    C --> R[📈 FPSDisplay.jsx<br/>Performance<br/>Color Coded]
    
    style A fill:#61dafb,stroke:#333,color:#000,stroke-width:3px
    style B fill:#000,stroke:#61dafb,color:#fff,stroke-width:2px
    style D fill:#FFA500,stroke:#333,color:#000
    style E fill:#4169E1,stroke:#333,color:#fff
    style F fill:#8B4513,stroke:#333,color:#fff
```

---

## 🛠️ Tech Stack

<div align="center">

### Core Technologies

| Technology | Version | Purpose | Icon |
|:---|:---:|:---|:---:|
| **React** | 19.2.0 | UI Framework & State Management | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40"/> |
| **Three.js** | 0.181.1 | 3D Graphics & WebGL Rendering | <img src="https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.svg" width="40"/> |
| **Vite** | 7.2.2 | Build Tool & HMR Dev Server | <img src="https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg" width="40"/> |
| **React Three Fiber** | 9.4.0 | React Renderer for Three.js | <img src="https://raw.githubusercontent.com/pmndrs/react-three-fiber/master/docs/logo.svg" width="40"/> |
| **React Three Drei** | 10.7.6 | Useful Three.js Helpers | <img src="https://raw.githubusercontent.com/pmndrs/drei/master/docs/logo.svg" width="40"/> |

</div>

### 📦 Dependencies

```json
{
  "@react-three/fiber": "^9.4.0",    // React Three.js renderer
  "@react-three/drei": "^10.7.6",     // Three.js helpers (OrbitControls, Html, Stars)
  "three": "^0.181.1",                // Core 3D graphics library
  "react": "^19.2.0",                 // UI framework
  "react-dom": "^19.2.0",             // React DOM bindings
  "vite": "^7.2.2"                    // Build tool & dev server
}
```

### 🔧 Dev Dependencies

```json
{
  "eslint": "^9.39.1",                // Code linting
  "@vitejs/plugin-react": "^5.1.0",  // Vite React plugin
  "gh-pages": "^6.2.0"                // GitHub Pages deployment
}
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have these installed:

- **Node.js** (v18.0+ required) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** version control - [Download](https://git-scm.com/)
- Modern browser with **WebGL 2.0 support**

### 📥 Installation

#### **Step 1: Clone the Repository**

```bash
# Using HTTPS
git clone https://github.com/MbuyeloMich/auraspace.git

# OR using SSH (if you have SSH keys set up)
git clone git@github.com:MbuyeloMich/auraspace.git

# Navigate to the project directory
cd auraspace
```

#### **Step 2: Install Dependencies**

```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

This will install all required packages (~150 MB).

#### **Step 3: Start Development Server**

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

**Expected output:**
```
  VITE v7.2.2  ready in 640 ms

  ➜  Local:   http://localhost:5173/auraspace/
  ➜  Network: use --host to expose
```

#### **Step 4: Open in Browser**

Navigate to: **`http://localhost:5173/auraspace/`**

The app should load with the 3D solar system!

---

## 🏗️ Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

**Output:** Optimized files in `dist/` folder (~1.2 MB)

---

## 🎮 Usage

### ⌨️ Keyboard Controls

| Key | Action | Description |
|:---:|:---|:---|
| **1** | Focus Mercury | Select and zoom to Mercury |
| **2** | Focus Venus | Select and zoom to Venus |
| **3** | Focus Earth | Select and zoom to Earth |
| **4** | Focus Mars | Select and zoom to Mars |
| **5** | Focus Jupiter | Select and zoom to Jupiter |
| **6** | Focus Saturn | Select and zoom to Saturn |
| **7** | Focus Uranus | Select and zoom to Uranus |
| **8** | Focus Neptune | Select and zoom to Neptune |
| **Space** | Pause/Resume | Toggle simulation pause |
| **↑** | Speed Up | Increase time speed (0.5x → 1x → 2x → 5x) |
| **↓** | Slow Down | Decrease time speed (5x → 2x → 1x → 0.5x) |
| **O** | Toggle Orbits | Show/hide orbital path lines |
| **L** | Toggle Labels | Show/hide planet name labels |
| **M** | Toggle Minimap | Show/hide 2D top-down view |
| **A** | Toggle Asteroids | Show/hide asteroid belt (2000 objects) |
| **Esc** | Reset Camera | Return to default solar system view |

### 🖱️ Mouse Controls

- **Left Click + Drag** - Rotate camera around solar system
- **Right Click + Drag** - Pan camera position (move view)
- **Scroll Wheel** - Zoom in/out
- **Click on Planet** - Select planet and show info panel

### 📱 UI Elements

- **📊 Stats Panel** (Top-left) - Real-time planetary data
- **📝 Info Panel** (Bottom-left) - Detailed planet facts on selection
- **📍 GPS & Clock** (Bottom-left) - Your location and current time
- **🎮 Control Buttons** (Top-right) - Toggle features
- **📸 Screenshot** (Top-right) - Capture and download current view
- **🗺️ Minimap** (Bottom-right) - 2D overview when enabled
- **📈 FPS Counter** (Top-right) - Performance monitoring

---

## 🔧 Development & Customization

### Project Structure

```
auraspace/
├── 📁 public/
│   └── 📁 textures/              # Planet texture images (JPG)
│       ├── sun.jpg
│       ├── mercury.jpg
│       ├── venus.jpg
│       ├── earth.jpg
│       ├── mars.jpg
│       ├── jupiter.jpg
│       ├── saturn.jpg
│       ├── saturn_ring.png
│       ├── uranus.jpg
│       └── neptune.jpg
│
├── 📁 src/
│   ├── 📄 App.jsx                # Main application component
│   ├── 📄 main.jsx               # React entry point
│   ├── 📄 index.css              # Global styles
│   │
│   └── 📁 components/
│       ├── 🌟 Sun.jsx            # Sun with point light
│       ├── 🪐 Planet.jsx         # Planet renderer with textures
│       ├── 🌙 Moon.jsx           # Moon orbital component
│       ├── 🪐 SaturnGroup.jsx    # Saturn with ring system
│       ├── ☄️ AsteroidBelt.jsx   # Instanced asteroid rendering
│       ├── 🌍 AtmosphereGlow.jsx # Custom atmosphere shader
│       ├── 🎥 CameraController.jsx    # Smooth camera transitions
│       ├── ⏰ AnimationController.jsx # Time & speed management
│       ├── 🛤️ OrbitTrail.jsx         # Orbital path visualization
│       ├── 🏷️ PlanetLabel.jsx        # HTML overlay labels
│       ├── 📊 StatsPanel.jsx         # Planetary statistics
│       ├── 📝 InfoPanel.jsx          # Detailed planet info
│       ├── 🗺️ Minimap.jsx            # 2D top-down view
│       ├── 📍 UserLocation.jsx       # GPS & live clock
│       ├── 📸 ScreenshotButton.jsx   # Canvas capture
│       └── 📈 FPSCounter.jsx         # Performance monitoring
│
├── 📄 package.json               # Dependencies & scripts
├── 📄 vite.config.js             # Vite configuration
├── 📄 eslint.config.js           # ESLint rules
├── 📄 index.html                 # HTML entry point
├── 📄 README.md                  # This file
├── 📄 LICENSE                    # MIT License
├── 📄 DOCUMENTATION.md           # Technical documentation
├── 📄 DEPLOYMENT.md              # Deployment guide
├── 📄 .gitignore                 # Git ignore rules
└── 📄 landing.html               # Landing page
```

### Common Customizations

#### 1. **Add a New Planet**

Edit `src/App.jsx`:

```javascript
const newPlanet = {
  name: "Pluto",
  radius: 0.18,
  distance: 120,
  speed: 0.001,
  color: "#CDC9A5",
  texture: "/textures/pluto.jpg",
  data: {
    mass: "0.0022 Earths",
    gravity: "0.62 m/s²",
    distance: "39.5 AU",
    period: "90,560 days"
  },
  moons: []
};

// Add to allPlanets array
```

#### 2. **Change Time Speed Options**

In `src/App.jsx`:

```javascript
const speedOptions = [0.5, 1, 2, 5]; // Modify as needed
```

#### 3. **Adjust Asteroid Count**

In `src/components/AsteroidBelt.jsx`:

```javascript
const asteroidCount = 2000; // Increase/decrease for performance
```

#### 4. **Modify Camera Settings**

In `src/App.jsx` Canvas component:

```javascript
<Canvas camera={{ position: [0, 50, 100], fov: 60 }}>
```

---

## 📜 License & Open Source

### MIT License

This project is licensed under the **MIT License**.

```
Copyright (c) 2026 Mbuyelo Mich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

**[View Full License](./LICENSE)**

### Open Source Philosophy

AuraSpace is **100% free and open source**. You can:

- ✅ **Use** commercially and privately
- ✅ **Modify** the source code
- ✅ **Distribute** copies and modifications
- ✅ **Sublicense** under the same terms

**Requirements:**
- 📄 Include the original copyright notice
- 📝 Include the MIT License text

### Framework Licenses

| Framework | License | Link |
|:---|:---|:---|
| React | MIT | [License](https://github.com/facebook/react/blob/main/LICENSE) |
| Three.js | MIT | [License](https://github.com/mrdoob/three.js/blob/dev/LICENSE) |
| Vite | MIT | [License](https://github.com/vitejs/vite/blob/main/LICENSE) |
| React Three Fiber | MIT | [License](https://github.com/pmndrs/react-three-fiber/blob/master/LICENSE) |

---

## 🌐 Deployment

### Current Deployment: GitHub Pages

This app is deployed on **GitHub Pages**:
- **Live URL**: https://mbuyelomich.github.io/auraspace/
- **Branch**: `gh-pages`
- **Status**: Active

### Deploy Updates

```bash
# Make your code changes

# Commit changes
git add .
git commit -m "feat: your changes"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

Your updates will be live in 2-5 minutes!

### Alternative Hosting Platforms

#### **Vercel** (Recommended for Production)
```bash
npm i -g vercel
vercel login
vercel --prod
```

#### **Netlify**
1. Build: `npm run build`
2. Drag `dist/` folder to Netlify

#### **Render**
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

---

## 📊 Performance

### Optimization Techniques

- 🚀 **Instanced Rendering** - 2,000 asteroids in 1 draw call
- 🎯 **Frustum Culling** - Only render visible objects
- 🔄 **RequestAnimationFrame** - Browser-optimized loop
- 💾 **Texture Caching** - Reuse loaded textures
- 📦 **Tree Shaking** - Remove unused code

### Performance Metrics

| Metric | Value | Details |
|:---|---:|:---|
| **Target FPS** | 60 | Smooth 60 FPS on mid-range hardware |
| **Asteroid Count** | 2,000 | Instanced rendering |
| **Draw Calls** | ~20 | Per frame |
| **Bundle Size** | 320 KB | Gzipped |
| **Load Time** | <3s | On 3G connection |

---

## 🔬 NASA Data

All planetary data is scientifically accurate from NASA JPL:

| Planet | Period (days) | Mass (Earths) | Gravity (m/s²) | Distance (AU) |
|:---|---:|---:|---:|---:|
| 🔴 Mercury | 88 | 0.055 | 3.7 | 0.39 |
| 🟡 Venus | 225 | 0.815 | 8.87 | 0.72 |
| 🔵 Earth | 365 | 1.0 | 9.81 | 1.0 |
| 🔴 Mars | 687 | 0.107 | 3.71 | 1.52 |
| 🟠 Jupiter | 4,333 | 318 | 24.79 | 5.20 |
| 🟡 Saturn | 10,759 | 95 | 10.44 | 9.54 |
| 🔵 Uranus | 30,687 | 14.5 | 8.87 | 19.19 |
| 🔵 Neptune | 60,190 | 17.1 | 11.15 | 30.07 |

**Data Source**: [NASA Planetary Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/)

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### **Black Screen / Canvas Not Rendering**
- **Check WebGL**: Visit [webglreport.com](https://webglreport.com/)
- **Update GPU drivers**
- **Try different browser** (Chrome recommended)

#### **Low FPS / Performance Issues**
- **Reduce asteroid count** in `AsteroidBelt.jsx`
- **Disable minimap** (press M)
- **Hide labels** (press L)
- **Close other applications**

#### **Textures Not Loading (White Spheres)**
- **Check texture paths**: Must be `/textures/planet.jpg`
- **Verify files exist** in `public/textures/`
- **Check browser console** for 404 errors

#### **Screenshot Captures Blank Image**
- **Wait for render**: Screenshot timing issue
- **Check Canvas props**: `preserveDrawingBuffer: true`

#### **Controls Not Working**
- **Click on canvas** to focus
- **Check keyboard layout** (US QWERTY)
- **Disable browser extensions** that intercept keys

---

## 📚 Documentation

- 📖 **[Technical Documentation](./DOCUMENTATION.md)** - Deep dive into architecture
- 🚀 **[Deployment Guide](./DEPLOYMENT.md)** - Hosting instructions
- 🔄 **[GitHub Walkthrough](./GITHUB_DEPLOYMENT_WALKTHROUGH.md)** - Step-by-step setup

---

## 🌟 Roadmap

### Planned Features

- [ ] 🌍 **More Moons** - Add Titan, Triton, etc.
- [ ] ☄️ **Comets** - Elliptical orbits with tails
- [ ] 🛸 **Spacecraft** - ISS, Voyager models
- [ ] 🎵 **Audio** - Ambient space music
- [ ] 📱 **Mobile Touch** - Optimized controls
- [ ] 🌓 **Moon Phases** - Realistic lunar phases
- [ ] 🔭 **Educational Mode** - Quiz and facts
- [ ] 🎮 **VR Support** - WebXR integration
- [ ] 🌌 **Galaxy View** - Milky Way zoom-out
- [ ] 📊 **Data Viz** - Planetary comparisons

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

### Contribution Guidelines

- Write clean, readable code
- Follow existing code style
- Test your changes thoroughly
- Update documentation as needed
- Be respectful and constructive

---

## 👨‍💻 Author

<div align="center">

### **Mbuyelo Mich**

*Full Stack Developer | 3D Web Enthusiast | Space Explorer*

[![GitHub](https://img.shields.io/badge/GitHub-MbuyeloMich-181717?style=for-the-badge&logo=github)](https://github.com/MbuyeloMich)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/mbuyelomich)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](#)

**Sole Contributor & Maintainer of AuraSpace**

</div>

---

## 🙏 Acknowledgments

### Resources & Inspiration

- **NASA** - Planetary data, images, and inspiration
- **Three.js Community** - Amazing 3D graphics library and examples
- **Pmndrs** - React Three Fiber and Drei helper libraries
- **Vite Team** - Lightning-fast build tooling
- **Open Source Community** - For making web development accessible

---

## 📧 Contact & Support

- 🐛 **Bug Reports**: [Open an Issue](https://github.com/MbuyeloMich/auraspace/issues/new?template=bug_report.md)
- 💡 **Feature Requests**: [Start a Discussion](https://github.com/MbuyeloMich/auraspace/discussions/new?category=ideas)
- 📧 **Email**: your.email@example.com
- 💬 **Discord**: [Join Community](#)

---

## ⭐ Show Your Support

If AuraSpace helped you learn or inspired you, please consider:

- ⭐ **Star this repository**
- 🍴 **Fork and experiment**
- 📢 **Share with others**
- 💬 **Leave feedback**
- 🤝 **Contribute code**

Your support motivates continued development!

---

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/MbuyeloMich/auraspace?style=social)
![GitHub forks](https://img.shields.io/github/forks/MbuyeloMich/auraspace?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/MbuyeloMich/auraspace?style=social)

![GitHub issues](https://img.shields.io/github/issues/MbuyeloMich/auraspace)
![GitHub pull requests](https://img.shields.io/github/issues-pr/MbuyeloMich/auraspace)
![GitHub last commit](https://img.shields.io/github/last-commit/MbuyeloMich/auraspace)
![GitHub repo size](https://img.shields.io/github/repo-size/MbuyeloMich/auraspace)

---

<div align="center">

**Made with ❤️, ☕, and 🚀 by Mbuyelo Mich**

© 2026 AuraSpace. Licensed under MIT. All rights reserved.

[⬆ Back to Top](#-auraspace---interactive-3d-solar-system)

</div>
