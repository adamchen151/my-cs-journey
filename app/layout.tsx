import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { Menu, MenuButton, MenuHeading, MenuItem, MenuItems, MenuSection, MenuSeparator } from '@headlessui/react'

const inter = Inter({ subsets: ["latin"] });

const links = [
  { href: '/projects/docs', label: 'Docs' },
  { href: '/projects/messenger', label: 'Messenger' },
  { href: '/projects/notion', label: 'Notion' },
]

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Adam Chen's Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="my-7 justify-items-center block space-x-4 font-semibold bg-white">
        <Link href="/">Home</Link>
        <Menu>
          <MenuButton className="data-[active]:text-blue-800">Projects</MenuButton>
          <MenuItems anchor="bottom">
            {links.map((link) => (
              <MenuItem key={link.href} className="block data-[focus]:text-blue-700">
                <a href={link.href}>{link.label}</a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>
      {children}
      </main>

      </body>
    </html>
  );
}
