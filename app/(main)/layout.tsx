import Navbar from './_components/navbar'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>{children}</body>
    </>
  )
}
