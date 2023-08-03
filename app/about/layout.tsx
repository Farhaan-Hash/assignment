import React from 'react'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <><h4>About NavBar only for about page</h4>
    <main>{children}</main></>
  )
}
