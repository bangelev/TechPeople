import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import 'react-loader-spinner/dist/loader/css/react-loader-spinner.css'

function Loading() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  console.log('FROM LOADING from: ', router.asPath)
  useEffect(() => {
    // Delelte this from here
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }
    // to here
    const handleStart = (url) => url !== router.asPath && setLoading(true)
    const handleComplete = (url) => url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    // And here
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    loading && (
      <ThreeCircles
        height="100vh"
        width="150"
        color="orange"
        wrapperStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(235, 255, 255)',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#fbc26f"
        innerCircleColor="#619d53"
        middleCircleColor="#eb7521"
      />
    )
  )
}
export default Loading
