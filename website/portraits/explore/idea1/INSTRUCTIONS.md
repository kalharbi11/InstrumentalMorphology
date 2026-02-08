# Interactive Dotted Portraits - Project Instructions

## Project Overview
An interactive dual-portrait viewer built with p5.js that displays side-by-side portraits of Khalid (left) and Maria (right). The portraits respond to mouse movement by changing direction (straight, up, down, left, right) and display an animated dotted effect.

**Location:** `website/portraits/explore/idea1/`

## Current Status (as of Feb 7, 2026)

### 🎯 PRIMARY GOAL
**Convert the working sketch_003.js into a dual-portrait side-by-side viewer:**
- Left side: Khalid portrait with hover detection
- Right side: Maria portrait with hover detection
- Both running simultaneously with identical logic but independent state
- Same dotted animation effect and zone-based image swapping for both

### 📝 Current Phase: IMPLEMENTATION

### ✅ Completed
- ✓ All portrait assets present (Khalid 5x + Maria 5x images)
- ✓ Working reference sketch (sketch_003.js) with proven dotted animation logic
- ✓ Basic HTML/CSS layout structure for side-by-side display

### 🔧 IN PROGRESS - Main Task
**Refactor sketch_003.js into dual-portrait setup:**

1. **Create two independent p5.js sketches**
   - `khalidSketch`: Manages left side (Khalid portraits)
   - `mariaSketch`: Manages right side (Maria portraits)
   - Each gets its own separate p5.Renderer instance

2. **Container architecture (CSS layout)**
   - `.page` - Full screen flex container
   - `.side` - Left half (Khalid) and Right half (Maria) - 50% width each
   - `.person-container` - Centered content within each side
   - `.sketch-container` - Canvas parent (for p5.js to append to)
   - `.person-name` - Name label (optional styling)

3. **Hover zone detection (same as sketch_003.js)**
   - Each sketch independently detects mouse position
   - Khalid responds to hover in left 50% of window
   - Maria responds to hover in right 50% of window
   - Both use the same 5-zone logic: straight (center), up, down, left, right
   - Container size = 2x canvas size (creates invisible hover margins)

4. **Image swapping logic**
   - Khalid swaps between: khalid-straight, khalid-up, khalid-down, khalid-left, khalid-right
   - Maria swaps between: maria-straight, maria-up, maria-down, maria-left, maria-right
   - Both trigger on zone detection with same threshold logic

### 📦 Assets Status
All portrait assets present and ready:
- **Khalid:** khalid-straight.png, khalid-up.png, khalid-down.png, khalid-left.png, khalid-right.png
- **Maria:** maria-straight.png, maria-up.png, maria-down.png, maria-left.png, maria-right.png

**⚠️ Git Status:** Maria assets are untracked (not yet committed)

### 🔄 Implementation Checklist

#### HIGH PRIORITY - DO NEXT
1. **[ ] Create dual sketch structure in sketch.js**
   - Refactor sketch_003.js code into khalidSketch and mariaSketch functions
   - Each sketch manages its own canvas, image loading, animation state
   - Use p5 instance mode to avoid global conflicts

2. **[ ] Update index.html**
   - Create two sketch containers: `<div id="khalid-container"></div>` and `<div id="maria-container"></div>`
   - Ensure both get p5.js loaded once

3. **[ ] Test side-by-side rendering**
   - Both canvases appear next to each other
   - No canvas overlap or sizing issues
   - Responsive on different window sizes

4. **[ ] Test hover zones**
   - Hover over Khalid's side: image changes based on proximity to edges
   - Hover over Maria's side: image changes based on proximity to edges
   - Center hover shows "straight" image for both
   - Margin areas trigger directional images

#### MEDIUM PRIORITY
5. **[ ] Performance optimization**
   - Monitor FPS with both sketches running
   - Adjust INITIAL_DOTS_PER_FRAME if needed (currently 5000)
   - Profile pixel operations on dual canvases

6. **[ ] Polish & Testing**
   - Cross-browser testing (Chrome, Firefox, Safari)
   - Mobile responsiveness (touch/hover behavior)
   - Smooth animation transitions between images
   - No console errors

## Technical Details

### File Structure
```
idea1/
├── index.html          (Main HTML - two sketch containers, p5.js CDN)
├── sketch.js           (Two separate p5 instances - khalidSketch + mariaSketch)
├── style.css           (Flexbox layout - side-by-side 50/50 split)
├── assets/
│   ├── khalid-*.png    (5 portrait variations: straight, up, down, left, right)
│   └── maria-*.png     (5 portrait variations: straight, up, down, left, right)
└── INSTRUCTIONS.md     (This file)
```

### Architecture: Two Independent p5.js Instances

#### Khalid Sketch (Left side)
```javascript
const khalidSketch = (p) => {
  // Local state variables specific to Khalid
  let img, totalDotsDrawn, subX, subY, isAliveMode, etc.

  p.preload = () => { loadImage('assets/khalid-straight.png') }
  p.setup = () => { p.createCanvas(...); append to khalid-container }
  p.draw = () => { animation phase 1 & 2 }
  p.mouseMoved = () => { detect if mouse in LEFT 50% of window, update zones }
}
new p5(khalidSketch);
```

#### Maria Sketch (Right side)
```javascript
const mariaSketch = (p) => {
  // Local state variables specific to Maria
  let img, totalDotsDrawn, subX, subY, isAliveMode, etc.

  p.preload = () => { loadImage('assets/maria-straight.png') }
  p.setup = () => { p.createCanvas(...); append to maria-container }
  p.draw = () => { animation phase 1 & 2 }
  p.mouseMoved = () => { detect if mouse in RIGHT 50% of window, update zones }
}
new p5(mariaSketch);
```

### Key Code Configuration (shared for both sketches)
```javascript
// LOCKED PARAMETERS - Same for both portraits
const INITIAL_DOTS_PER_FRAME = 5000    // Dots per frame during fill phase
const MAX_TOTAL_DOTS = 24000           // Total dots before switching to alive mode
const ALIVE_SPEED = 85                 // Dots per frame in alive mode
const ALPHA_THRESHOLD = 126            // Min opacity to draw a dot
const DOT_OPACITY = 203                // Dot transparency
const BRIGHTNESS_SENSITIVITY = 0.4     // Darker pixels = larger dots
const ALIVE_MAX_SIZE = 6               // Max dot size in alive mode
const ALIVE_MIN_SIZE = 3               // Min dot size in alive mode
```

### Hover Detection Logic (Same for both, but triggered independently)
- **Window split:** `windowWidth / 2` divides Khalid (left) and Maria (right)
- **Container size:** Canvas × 2 (creates invisible hover margin around visible canvas)
- **5-zone detection per person:**
  1. **Center zone** = Inside canvas bounds → "straight" image
  2. **Outside zone** = Outside container bounds → "straight" image
  3. **Margin zones** = Between canvas and container edge → directional based on closest edge
     - **Left margin** → "left" image
     - **Right margin** → "right" image
     - **Top margin** → "up" image
     - **Bottom margin** → "down" image

### Image Swapping on Hover
```
Khalid (left side):
  Center/Outside → khalid-straight.png
  Left margin → khalid-left.png
  Right margin → khalid-right.png
  Top margin → khalid-up.png
  Bottom margin → khalid-down.png

Maria (right side):
  Center/Outside → maria-straight.png
  Left margin → maria-left.png
  Right margin → maria-right.png
  Top margin → maria-up.png
  Bottom margin → maria-down.png
```

### Animation Phases (Both sketches follow this)
1. **Phase 1: Initial Fill** (First 24,000 dots)
   - Uses random walk algorithm starting from canvas center
   - Draws 5000 dots per frame
   - Samples image colors and brightness for dot size
   - Takes ~5 frames to complete

2. **Phase 2: Alive Mode** (Next 10 seconds)
   - Random dot placement across entire image
   - Draws 85 dots per frame
   - Same color/brightness sampling
   - Auto-pauses after 600 frames (10 seconds) via `noLoop()`

## How to Resume Work

If chat disappears mid-session:

1. **Check this file first** - INSTRUCTIONS.md documents the current goal and progress
2. **Check git status** - `git status` shows what's been staged/changed
3. **Check recent commits** - `git log --oneline -5` shows what was completed
4. **Reference the checklist above** - Continue from where the checkmarks left off
5. **If stuck:** Check the Technical Details section for architecture and logic

### Quick Copy-Paste Commands to Resume
```bash
# See current status
git status

# See what changed
git diff

# See recent work
git log --oneline -5

# View the checklist progress
cat INSTRUCTIONS.md | grep -A 20 "Implementation Checklist"
```

## Next Session Checklist

Starting point: Need to refactor sketch_003.js into dual-sketch setup

### Before You Start
- [ ] Browser open to view the site while coding
- [ ] sketch_003.js open as reference (archive folder)
- [ ] Current sketch.js, index.html, style.css ready to edit

### Phase 1: Dual Sketch Architecture
- [ ] Create khalidSketch function body (copy sketch_003.js logic, swap khalid assets)
- [ ] Create mariaSketch function body (copy sketch_003.js logic, swap maria assets)
- [ ] In khalidSketch.mouseMoved(): Add `if (winMouseX < windowWidth/2)` check
- [ ] In mariaSketch.mouseMoved(): Add `if (winMouseX >= windowWidth/2)` check
- [ ] Instantiate both with `new p5(khalidSketch)` and `new p5(mariaSketch)`
- [ ] Test: Browser should show two canvases side-by-side

### Phase 2: HTML Containers
- [ ] Update index.html with two containers:
  ```html
  <div class="page">
    <div class="side">
      <div class="person-container">
        <h2 class="person-name">Khalid</h2>
        <div id="khalid-container"></div>
      </div>
    </div>
    <div class="side">
      <div class="person-container">
        <h2 class="person-name">Maria</h2>
        <div id="maria-container"></div>
      </div>
    </div>
  </div>
  ```

### Phase 3: CSS Layout
- [ ] `.side` should be 50% width, flex container, center content
- [ ] `.page` should be full viewport, flex row
- [ ] `.person-container` centers the sketch-container vertically
- [ ] `.person-name` positioned absolutely at top

### Phase 4: Testing & Debugging
- [ ] Open browser dev tools (F12)
- [ ] Check console for errors (should be none)
- [ ] Hover over left side: Khalid image changes with mouse direction
- [ ] Hover over right side: Maria image changes with mouse direction
- [ ] Both animate dotted effect independently
- [ ] Resize window: Both canvases scale correctly
- [ ] No lag or performance issues

### Phase 5: Finalization
- [ ] Commit all changes: `git add . && git commit -m "Dual-portrait sketch with Khalid and Maria"`
- [ ] Test on mobile if possible
- [ ] Document any issues found in next session
