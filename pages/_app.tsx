import type { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"
import { RecoilRoot } from "recoil"
import { FC } from "react"

const GlobalCSS = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <RecoilRoot>
            <GlobalCSS />
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
