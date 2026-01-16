import CountdownTimer from './components/CountdownTimer'
import PreWaitText from './components/PreWaitText'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <PreWaitText />
      <CountdownTimer />
    </main>
  )
}
