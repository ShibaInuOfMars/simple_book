import {createGlobalStyle} from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1571664893644'); /* IE9 */
        src: url('./iconfont.eot?t=1571664893644#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('./iconfont.woff?t=1571664893644') format('woff'),
        url('./iconfont.ttf?t=1571664893644') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1571664893644#iconfont') format('svg'); /* iOS 4.1- */
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

    .iconaixin:before {
        content: "\e602";
    }

    .iconpinglun2:before {
        content: "\e684";
    }

    .icondiamond:before {
        content: "\e63d";
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

