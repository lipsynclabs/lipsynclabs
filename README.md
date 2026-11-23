# LipSync Labs — Topography background integration

This project preserves the supplied LipSync Labs website and adds the supplied React Bits Topography component as a fixed, full-viewport animated background.

## Run locally

1. Install Node.js 18+.
2. Open this folder in a terminal.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Notes

- The original website sections, copy, navigation, comparison slider, and inquiry form markup/scripts are retained.
- Broad hero/section background gradients were removed so the Topography animation is visible throughout the page.
- Card and content surfaces remain to preserve text contrast and readability.
- The Topography component uses WebGL 2. A browser/device without WebGL 2 support may not render the animation.
