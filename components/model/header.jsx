import Head from "next/head";
import React from "react";

function HeaderModel({ title, metaContent }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaContent} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HeaderModel;
