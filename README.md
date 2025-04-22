
# Customizable "About Me" Portfolio Template

A fully customizable personal portfolio template where all content is controlled through a single configuration file.

## Features

- **Easily Customizable**: Update your entire portfolio by editing a single config file
- **Responsive Design**: Looks great on all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Section Control**: Enable/disable sections by setting values to "N/A"
- **Custom Colors**: Customize the color scheme to match your personal brand

## How to Customize

### 1. Edit Configuration File

Open `src/config/profileConfig.ts` and update the values with your information:

```typescript
// Example configuration
export const profileConfig = {
  // Basic Info
  name: "John Smith", // Your name
  title: "Frontend Developer", // Your professional title
  photoUrl: "https://...", // URL to your profile photo
  bio: "A passionate frontend developer...", // Your bio
  
  // Contact Information (set any to "N/A" to hide)
  email: "john@example.com",
  phone: "+1 (555) 123-4567", 
  location: "New York, USA",
  
  // Social Links (set to "N/A" to hide)
  socials: {
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    twitter: "https://twitter.com/johnsmith",
    instagram: "N/A", // This social link will be hidden
    facebook: "N/A"
  },
  
  // Skills (set to [] to hide section)
  skills: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 }
  ],
  
  // Experience (set to [] to hide section)
  experience: [...],
  
  // Education (set to [] to hide section)
  education: [...],
  
  // Projects (set to [] to hide section)
  projects: [...],
  
  // Theme Configuration
  theme: {
    primaryColor: "#3B82F6", // Blue
    secondaryColor: "#10B981", // Green
    accentColor: "#8B5CF6", // Purple
    darkMode: false // Set to true for dark mode by default
  }
};
```

### 2. Disabling Sections

To disable a section, you can:

- Set string values to "N/A" (e.g., `bio: "N/A"`)
- Set array values to empty array (e.g., `skills: []`)

### 3. Custom Styling

You can customize the color scheme by editing the `theme` section in the config file:

```typescript
theme: {
  primaryColor: "#3B82F6", // Change to your preferred primary color
  secondaryColor: "#10B981", // Change to your preferred secondary color
  accentColor: "#8B5CF6", // Change to your preferred accent color
  darkMode: false // Set to true for dark mode by default
}
```

### 4. Changing Profile Photo

Replace the `photoUrl` with a URL to your own profile photo. You can use services like Imgur or any image hosting service.

## Development

This project is built with:
- React
- TypeScript
- Tailwind CSS
- Vite

To run locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## License

MIT
