# Instrumental Morphology - Interactive Portrait

This project recreates a dotted portrait effect using p5.js. It features interactive hover zones that switch between 5 different portrait views.

## Website/Portraits

An interactive dotted portrait effect with the following features:

- **Dotted Effect**: portraits are drawn using dots that fill in from the center
- **Responsive Design**: Scales proportionally based on screen size (max 400px)
- **Hover Zones**: 5 interactive zones that switch between different portrait angles
  - Center: Default portrait (straight facing)
  - Left: Profile view pointing left
  - Right: Profile view pointing right
  - Up: Looking up angle
  - Down: Looking down angle
- **Alive Mode**: Subtle continuous animation after initial fill completes

## Parameters

All parameters are locked/hardcoded:

- `INITIAL_DOTS_PER_FRAME`: 5000 (dots rendered per frame during fill)
- `MAX_TOTAL_DOTS`: 24000 (target total dots)
- `ALIVE_SPEED`: 85 (dots added per frame in alive mode)
- `BRIGHTNESS_SENSITIVITY`: 0.4 (controls dot size based on image brightness)
- `DOT_OPACITY`: 203 (transparency of dots)
- Canvas size: Max 400px, responsive to screen size

## File Structure

```
website/portraits/
├── index.html       # HTML structure with p5.js CDN
├── style.css        # Styling and layout
├── sketch.js        # p5.js sketch with portrait rendering logic
└── assets/
    ├── khalid-straight.png
    ├── khalid-left.png
    ├── khalid-right.png
    ├── khalid-up.png
    └── khalid-down.png
```

## Local Development

1. Use VS Code Five Server extension for local development
2. Open `index.html` with Five Server to test locally
3. Refresh browser to reload changes

## Technical Details

- Built with p5.js v1.7.0 (via CDN)
- Uses random walk algorithm for dot placement during initial fill
- Pixel sampling from source images to match colors and brightness
- Responsive canvas sizing with flexbox layout
