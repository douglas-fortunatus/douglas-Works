import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document{

    static async getInitialProps({ renderPage }){
        const sheet = new ServerStyleSheet();

        const page = renderPage((App) => (props) => sheet.collectStyles(<App { ... props} />));

        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags }
    }

    render() {
        return(
            <Html lang="en">
                <Head>
                    {this.props.styleTags}

                    {/* meta tags */}
                    <meta name="author" content="Douglas Fortunatus" />
                    <meta name="keywords" content="Douglas Fortunatus, Doku, DCODE, DxCODE" />

                    {/* stylesheets */}
                    {/* <link rel="stylesheet" href="/css/normalize.css" />
                    <link rel="stylesheet" href="/css/base.css" /> */}

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}