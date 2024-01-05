// 20240105_HP/next-website/src/pages/_app.tsx
import '../app/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '../app/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}