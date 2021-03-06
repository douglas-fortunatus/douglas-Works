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

                    <meta name="author" content="Douglas Fortunatus" />
                    <meta name="keywords" content="Douglas Fortunatus, Doku, DCODE, DxCODE" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}