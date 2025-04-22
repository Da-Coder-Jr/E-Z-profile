
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

Open `src/config/profileConfig.ts` and update the values with your information.

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
