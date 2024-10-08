'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { use } from 'react';



export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-slate-600 py-6 px-10">
        <ul className="p-4 flex flex-row gap-4">
            <li>
                <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-600': pathname === '/',
              },
            )} href="/">Home</Link>
            </li>
            <li>
                <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-600': pathname === '/about',
              },
            )}href="/about">About</Link>
            </li>
            <li>
                <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-600': pathname === '/ourteams',
              },
            )} href="/ourteams">Our Teams</Link>
            </li>
            <li>
                <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-600': pathname === '/contact',
              },
            )} href="/contact">Contact</Link>
            </li>
            <li>
                <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-600': pathname === '/pricing',
              },
            )} href="/pricing">Pricing</Link>
            </li>
        </ul>
        </nav>
    );
    }