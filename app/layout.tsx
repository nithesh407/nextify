'use client'
import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout from "antd/es/layout/layout";
import { FloatButtonComponent, Navbar } from "@/ui/components";
import React from 'react';
import Loading from "./loading";
import { Suspense } from "react";
import { usePathname } from "next/navigation";




const RootLayout = ({ children }: React.PropsWithChildren) => {
  const path = usePathname()
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {path !== '/Signup' && path !== '/Login' && <Navbar />}

          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <FloatButtonComponent />
        </AntdRegistry>
      </body>
    </html>
  )
};

export default RootLayout;
