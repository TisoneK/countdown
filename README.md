# Countdown Timer

A single-page web experience featuring a 60-second countdown timer that starts automatically and ends in intentional nothingness.

## Purpose

This project implements an artistic countdown timer experience that:
- Starts automatically when the page loads
- Counts down from 60 to 0 in real-time
- Displays an anticlimactic end state with no further interaction
- Maintains minimal aesthetic and simplicity

## Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5.0+
- **UI**: React 18+
- **Styling**: Tailwind CSS (minimal)
- **Rendering**: Client-side only (static export)

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the countdown timer.

## Build

```bash
npm run build
```

Creates a static export in the `out/` directory.

## Constitution Compliance

This implementation follows the Countdown Timer Constitution v1.0.0:
- ✅ Simplicity Above All
- ✅ Client-Side Only
- ✅ Minimal Aesthetic
- ✅ Intentional Anticlimax
- ✅ Automatic Execution
- ✅ Technology Stack Compliance
- ✅ Scope Boundaries

## Expected Behavior

1. Page loads with "60" displayed
2. Countdown starts automatically within 1 second
3. Timer counts down to 0 with smooth updates
4. At 0, displays "Okay. That's it." with no further interaction
5. Page refresh restarts the experience

## License

MIT
