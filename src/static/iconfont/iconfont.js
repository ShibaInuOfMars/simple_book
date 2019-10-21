import {createGlobalStyle} from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1571640671078'); /* IE9 */
        src: url('./iconfont.eot?t=1571640671078#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAW4AAsAAAAACsQAAAVqAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqHbIZXATYCJAMcCxAABCAFhG0HgQUbVAlRlE5OmewLbBv2pInJyTg2HCMBDYAwCCgAAFBg38AEamDx8LTft3Nn5snOX1WSaFy2It5MM4lO/QlJS8mUQig0kkfP5PnfpetaDmHy0DfaSuZW02f83P2O/MtkeJxGKYQE4WjzcwCZw+fpv2pIWqejnGSC0pNuWPopBJ84gSfGwP/c79Wf1vbw1/1t3yWjLWobDXdGCTSwiNIoTKBNbCA6kC3l2aQTTizx2nw5geqITPvK1cNza6Qg2oCmF1jx1iiyKTXUMBr7kkOLeKczprfpoznUPx//PEYkXUZ2vfX8UrVOfupVnrapZxJFPp4Hu6PIOKulEK9KfVPZ5s7qqpffWdzTMm+U9D9Zs+PA+V61RtxN5oZ5Wk3Wi8X+5SlED3WzgH+U7/mJC8n8XJOV6XfAIkB/ABYJ9OfBo/OI5aB4uXQDHjKPZa04pxXvEcI+XXrVnrRI0uLKaHROJSwVCsyVlnZCD09bZGLJZI2bSCuMNCIVxiVlrclkXRNbK435V7OWQJiwAuqBq6pJJ2iVTWXTSVgHQA3oHKS9wyFwnIC0CeihbWBxO6y7yOHMCDdtszFbut2BSLfT2pzcMandYWXaCeu2K43bcKFAxG+HOTCA702Q5NCyGT1LsG4F0uMuFdodxE7d9sVtlVqMYRhC4CyL6FCaRhYrKMpSYS4loaQswzAzpLHrmoWXqIRT1GLo/sQl3brXPMMQbPJZNrrEuLg0ZnkbEXYgidQGUeVperHRWhHlJoLUIhXokqmltejqxjyDcY87y0x3O0hLJVCP0NM0CuvYZLQZusIkMSx+loXhyzRBU//CGlWqyt0PR3zCBqND9Yg/rvBN7YPcZ9xvLEN80gai0lTIDRJJ4Lu8thwH53T2fZ+M+23i/+Iy051UjHLTmruSWP7vpJHRyzHBHEFq0IAv1iWqg/NT4t7V46M3bZW/7Ty/eTqBoJbCayADZEgyZddkmZIMUbb4bb84VCLky0TyzSQgZ/t3bNi7YaF/caZuZnb7SXAsNvN+y7vuZu/+j1GBGW2QIOxtb1n04Ad3xzOvELWP2nuZzzK5vqbcrdh1Zsa1xK3siFu5a7ETh4FytyMlnGL38iPu7dUgdQOfZXkbqFhKhJoHHv4Gvr8lsOfZtn5fXbY9xRqDJ76ETWp2r/qESm9KsOUB3RNsV00Y6verA5WdlKF9/VbxmTXM523Sk1K2f/dyN2xxbz9RM8hXAzFS8f1n2oBee5ASMFZZNxKewrFIHgx40tBoDmra7gyHpXAs4zo9D91/tu6UxWBLQGcRJnhZXt7a5BVtMdTiX1Dq1cYd9G8pyW/yAvOAPGn6wfMHoP0/xwNAOyniFQLQzp7npQLQ3uTxnABoP1Q8deoXejOXD3VvGyQH/0fwR7bg86fUoKPtZNFf9q3Uay3/+spbTilXJbEP5TyYy1r6BzcD2XiaSmfxpQ0t+0PDWmudf4hhzUMy2INsdBRd8GehM7EPvdF5qM64PnpihdMVZQanfSUQFn1DMu8DZIt+0AX/C511/9BbjC5UD2LnlBPHAyfnDngAxcQHQ0lGM2eYmOZHqOKGu1Cpaa/gPCbZophni9dgwI2xh0/VMgTNtKMtu0quBpsNscbRCmQo6hCavbLUZQ9USNq2Ji5zABcAhRE+MEgihpbzB5Pc9z8ClWiDczV9L6KvgOPh6pmFwrwF+lpnWvVdS6eXVJYCZjRG7xrJFnOFHrChOcI05RutACko1D0yjT0lzqTb6or5DdvneQVU5BWGSJGjRBd9DDGqLwEFcgq46Jzyma8prvAd+SfH3c8aDTcyAkbzbNooTjV4KoWFki4SDM8caLavr/MNGhh4ij5SqwUA') format('woff2'),
        url('./iconfont.woff?t=1571640671078') format('woff'),
        url('./iconfont.ttf?t=1571640671078') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1571640671078#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .iconweibiaoti1:before {
        content: "\e61b";
    }

    .iconAa:before {
        content: "\e636";
    }

    .iconshoujixiazai:before {
        content: "\e600";
    }

    .iconzhinanzhenfaxiandaohangdizhiweizhi:before {
        content: "\e786";
    }

    .iconrefresh-line:before {
        content: "\e63f";
    }

    .iconsousuo:before {
        content: "\e615";
    }
`;

