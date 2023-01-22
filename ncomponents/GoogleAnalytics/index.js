/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable react/jsx-fragments */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-danger */
import React, { Fragment } from 'react'
import Head from 'next/head'

export default ({ Id }) => {
  return (
    <Fragment>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${Id}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${Id}');
          `,
          }}
        />
      </Head>
    </Fragment>
  )
}
