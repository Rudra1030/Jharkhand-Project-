import { AdminDashboard } from '@/components/pages/AdminDashboard'

export default function AdminPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-neutral-50">
      <div className="container-custom py-8">
        <AdminDashboard />
      </div>
    </div>
  )
}
