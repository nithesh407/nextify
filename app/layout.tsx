import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { FloatButtonComponent } from "@/ui/components";
import React from 'react';

export const metadata: Metadata = {
  title: "Nextify",
  description: "Social Media App",
};


const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        {children}
        <FloatButtonComponent />
      </AntdRegistry>

    </body>
  </html>
);

export default RootLayout;
