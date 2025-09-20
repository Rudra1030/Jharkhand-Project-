import { AboutHero } from '@/components/pages/AboutHero'
import { MissionVision } from '@/components/pages/MissionVision'
import { TeamSection } from '@/components/pages/TeamSection'
import { StatsSection } from '@/components/pages/StatsSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <AboutHero />
      <MissionVision />
      <StatsSection />
      <TeamSection />
    </div>
  )
}
