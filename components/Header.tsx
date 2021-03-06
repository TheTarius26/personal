import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

export default function Header({title}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}