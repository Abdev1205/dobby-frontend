'use client'

import React from 'react'
import useSession from '@/hooks/useSession'
import LoadingAnimation from '@/components/animation/LoadingAnimation'
import { useRouter } from 'next/navigation'

const Home = () => {

  const { user, loading, loggedIn, logout } = useSession();
  const router = useRouter();

  if (loading) {
    return <LoadingAnimation />;
  }
  if (!loggedIn) {
    router.push('/login')
  }
  return <LoadingAnimation />;
}

export default Home
