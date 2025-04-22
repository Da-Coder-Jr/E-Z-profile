
# E-Z profile 

A fully customizable personal portfolio template where all content is controlled through a single configuration file.

## Features

- **Easily Customizable**: Update your entire portfolio by editing a single config file
- **Responsive Design**: Looks great on all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Section Control**: Enable/disable sections by setting values to "N/A"
- **Custom Colors**: Customize the color scheme to match your personal brand

## How to Customize

### 1. Edit Configuration File

Open [`src/config/profileConfig.ts`](https://github.com/Da-Coder-Jr/E-Z-profile/blob/main/src/config/profileConfig.ts) and update the values with your information.

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

##  Favicon Setup

1. **Generate your icons**  
   - Go to https://realfavicongenerator.net  
   - Upload your source image or select an emoji/icon, choose platforms, then click **Generate Favicon**.  
   - Download the ZIP containing `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, etc.

2. **Install your icons**  
   - Unzip the download.  
   - In your project’s `public/` folder, delete any existing favicon files.  
   - Copy all generated files from the ZIP into `public/`.  

##  Hosting on Vercel

You can also deploy this portfolio to Vercel in seconds:

1. Push your repo to GitHub (or another Git provider).  
2. Log in to Vercel and click **New Project**.  
3. Select your repository and import it.  
4. Accept the auto‑detected Vite build settings.  
5. Click **Deploy** — your site will be live at `https://your-project.vercel.app`.  

Optionally, add a custom domain and Vercel will manage HTTPS and continuous updates on every git push.  

