'use client'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { AppProvider } from '@toolpad/core/nextjs'
import branding from '@/config/branding'
import navigation from '@/config/navigation'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider
        branding={branding}
        navigation={navigation}
        session={null}
        router={undefined}
        theme={undefined}
      >
        <GlobalStyles />
        {children}
      </AppProvider>
    </ThemeProvider>
  )
}
