"use client"

import React from "react";


import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

interface IParams {
  params: Record<string, string>,
  searchParams: Record<string, string>,
}


export default function Home(params: IParams) {
  const { searchParams } = params;

  if (!searchParams.embedded) {
    // const p = new URLSearchParams(searchParams);
    redirect("/Dashboard", RedirectType.replace);
    // redirect(`/api/auth?${p.toString()}`, RedirectType.replace);
  }

  return <h1>Hello</h1>;
}