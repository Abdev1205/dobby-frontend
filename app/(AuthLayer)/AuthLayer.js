"use client"
import React from 'react'
import useSession from '@/hooks/useSession'
import LoadingAnimation from '@/components/animation/LoadingAnimation';
import { useRouter } from 'next/navigation';


// a layered Component to check session 
// if session is valid then only chidren will be available
const AuthLayer = ({ children }) => {
  const { user, loading, loggedIn } = useSession();
  const router = useRouter();

  const publicRoute = ['/login', '/register', '/'];

  // Check if the current route is public
  const isPublicRoute = publicRoute.includes(router.pathname);


  if (loading) {
    return <LoadingAnimation type={"global"} />;
  }

  if (!loggedIn && !isPublicRoute) {
    router.push('/login');
    return null;
  }

  return (
    <div className=' w-[100%] ' >
      {children}
    </div>
  )
}

export default AuthLayer
