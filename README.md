# SHUBRAO PORTFOLIO — QUICK SETUP

This folder is a ready-to-upload static website. It uses only HTML, CSS and JavaScript.

## 1) Test it on your phone/PC
You can upload the files to GitHub. If you have a computer, open `index.html` locally to preview the design.

## 2) GitHub Pages — free hosting
1. Go to https://github.com and sign in.
2. Create a new PUBLIC repository named `shubrao-portfolio`.
3. Upload ALL files/folders from this package, keeping the same structure:
   - index.html
   - style.css
   - script.js
   - assets/profile.jpg
   - assets/videos/reel-01.mp4 ... reel-09.mp4
   - assets/thumbs/reel-01.jpg ... reel-09.jpg
4. Open repository Settings → Pages.
5. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
6. Save. GitHub will show the live URL.

## 3) IMPORTANT — replace the profile image
`assets/profile.jpg` is a temporary crop from the supplied Instagram screenshot. Replace it with Shubrao's actual clean profile photo and keep the filename `profile.jpg`.

## 4) Add the real showreel
When the final showreel is ready:
- Put it in `assets/videos/showreel.mp4`
- In `index.html`, replace the SHOWREEL placeholder block with a normal HTML5 video element, e.g.
  <video src="assets/videos/showreel.mp4" controls playsinline></video>

For a large showreel, YouTube/Vimeo embedding is usually better than storing a large video directly in GitHub.

## 5) Edit project names/categories
Open `script.js`. The `projects` array at the top contains the nine project titles, labels and descriptions. Change those strings without changing the video filenames.

## 6) Contact
The current contact email is:
raoshubham567890@gmail.com

Instagram:
https://www.instagram.com/shubrao8/

## 7) What is already included
- Responsive mobile/desktop layout
- Hero section
- Selected work grid
- Category filters
- Click-to-preview video modal
- Services
- About
- Instagram CTA
- Contact section
- Smooth scroll/reveal animations
- Purple + green + black visual system

## 8) One important rule
Only use client names, testimonials and claims that Shubrao is genuinely allowed to publish. If a project is a recreation or personal experiment, label it honestly.
