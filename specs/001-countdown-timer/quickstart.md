# Quickstart Guide: Countdown Timer Experience

**Date**: 2025-01-16  
**Feature**: Countdown Timer Experience

## Overview

A single-page web experience featuring a 60-second countdown timer that starts automatically and ends in intentional nothingness.

## Prerequisites

- Node.js 18+ 
- Modern web browser
- Next.js 14+ (automatically installed)

## Setup Instructions

### 1. Initialize Project

```bash
npx create-next-app@latest countdown-timer --typescript --tailwind --eslint --app
cd countdown-timer
```

### 2. Configure Next.js for Client-Side Only

Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 3. Create Countdown Component

Create `app/components/CountdownTimer.tsx`:
```typescript
'use client'

import { useState, useEffect, useRef } from 'react'

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(60)
  const [isComplete, setIsComplete] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, 60 - Math.floor(elapsed / 1000))
      
      setTimeRemaining(remaining)
      
      if (remaining === 0) {
        setIsComplete(true)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, 16) // ~60fps

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  if (isComplete) {
    return <div className="text-6xl font-mono">Okay. That's it.</div>
  }

  return (
    <div className="text-6xl font-mono text-center">
      {timeRemaining}
    </div>
  )
}
```

### 4. Update Main Page

Replace `app/page.tsx`:
```typescript
import CountdownTimer from './components/CountdownTimer'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <CountdownTimer />
    </main>
  )
}
```

### 5. Minimal Styling

Replace `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: monospace;
}
```

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the countdown timer.

## Build for Production

```bash
npm run build
```

This creates a static export in `out/` directory that can be deployed to any static hosting service.

## Expected Behavior

1. Page loads with "60" displayed
2. Countdown starts automatically within 1 second
3. Timer counts down to 0 with smooth updates
4. At 0, displays "Okay. That's it." with no further interaction
5. Page refresh restarts the experience

## Compliance Checklist

- ✅ No user controls or configuration
- ✅ Automatic start on page load
- ✅ 60-second duration
- ✅ Anticlimactic end state
- ✅ Client-side only
- ✅ Minimal styling
- ✅ No external dependencies

## Troubleshooting

**Timer doesn't start**: Ensure `'use client'` directive is present
**Styling not applied**: Check Tailwind CSS imports
**Build fails**: Verify Next.js configuration for static export
