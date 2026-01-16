'use client'

import { useState, useEffect, useRef } from 'react'

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(60)
  const [isComplete, setIsComplete] = useState(false)
  const intervalRef = useRef<any>(null)

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
