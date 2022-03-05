import React, { ReactNode } from 'react'
import { Header } from './'
function Layout(props: { children: ReactNode }): JSX.Element {
  const {children} = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
