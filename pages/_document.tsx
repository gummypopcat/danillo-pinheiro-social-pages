import { NextPage } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: NextPage = () => {
  return (
   <Html>
      <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
         <title>Danillo Pinheiro - Social</title>
      </Head>
      <body>
         <Main />
         <NextScript />
      </body>
   </Html>
   );
};

export default Document;
