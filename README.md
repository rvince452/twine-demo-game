# Lane Residence - Interactive Fiction Game

A Twine interactive fiction game built with Tweego and SugarCube.

## Description

Explore the Lane Residence, a 1960s-1970s farmhouse with authentic period details and atmospheric descriptions. Navigate through various rooms including the entry hall, living room, kitchen, basement, attic, and upstairs bedrooms.

## Building the Game

This project uses Tweego to compile the Twee source files into a playable HTML game.

### Automated Builds

The game is automatically built using GitHub Actions whenever changes are pushed to the main branch:

- ✅ **Continuous Integration**: Automatically compiles the game on every push
- ✅ **GitHub Pages Deployment**: Game is automatically deployed and playable online
- ✅ **Artifact Downloads**: Compiled game files are available as downloadable artifacts

**Play Online**: [https://rvince452.github.io/twine-demo-game/](https://rvince452.github.io/twine-demo-game/)

### Manual Build (Local Development)

#### Prerequisites

- [Tweego](https://www.motoslave.net/tweego/) - Twee compiler

#### Build Instructions

1. Navigate to the game directory
2. Run Tweego to compile:
   ```
   tweego -o build/game.html passages/
   ```

## Project Structure

```
├── passages/           # Twee source files
│   ├── 00_header.twee  # Header and metadata
│   ├── 01_notes.twee   # Development notes
│   ├── 10_start.twee   # Starting passage
│   └── 20_mainhouse.twee # Main house locations
├── scripts/            # JavaScript files
│   ├── custom.js       # Custom JavaScript
│   └── macros.js       # Custom macros
├── styles/             # CSS stylesheets
│   └── custom.css      # Custom styles
├── build/              # Compiled output
│   └── game.html       # Playable game file
└── overview.txt        # Project overview
```

## Features

- Detailed room descriptions with period-appropriate details
- Interactive navigation between rooms
- SugarCube story format
- Authentic 1960s-70s farmhouse atmosphere

## Playing the Game

Open `build/game.html` in any modern web browser to play the game.

## Development

The game is written in Twee 3 format using SugarCube 2. Source files are organized by location and functionality in the `passages/` directory.

## License

[Add your preferred license here]