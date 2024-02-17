import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout from "antd/es/layout/layout";
import { FloatButtonComponent, Navbar } from "@/ui/components";
import React from 'react';
import Loading from "./loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nextify",
  description: "Social Media App",
};


const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <Navbar />
        <main>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        </main>
        <FloatButtonComponent />
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
