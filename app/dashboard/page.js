import React from 'react'
import AuthLayer from '../(AuthLayer)/AuthLayer'
import Panel from '@/components/Dashboard/LeftPanel/Panel'
import DashboardLayout from "./Layout.js"
import OverviewHeader from '@/components/Dashboard/overview/header'
import OverviewStorage from '@/components/Dashboard/overview/storage/OverviewStorage'
import RecentFiles from '@/components/Dashboard/files/RecentFiles'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='' >
        <OverviewHeader />
        <OverviewStorage />
        <RecentFiles />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
