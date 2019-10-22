import {createGlobalStyle} from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1571731693395'); /* IE9 */
        src: url('./iconfont.eot?t=1571731693395#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('./iconfont.woff?t=1571731693395') format('woff'),
        url('./iconfont.ttf?t=1571731693395') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1571731693395#iconfont') format('svg'); /* iOS 4.1- */
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

    .iconfanhuidingbu-:before {
        content: "\e646";
    }

    .iconsousuo:before {
        content: "\e615";
    }
`;

