import {createGlobalStyle} from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1571556781525'); /* IE9 */
        src: url('./iconfont.eot?t=1571556781525#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUQAAsAAAAACbQAAATBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqGCIUoATYCJAMYCw4ABCAFhG0Hdht8CBEVpMWQ/RyM2+TCTaxAP5IQBKnxIebWbCt/a/Tee8/gkez+/2SS3TsPwAeJEioauKRLqdb+vX9v5yW+NyDRfdehvJ5+ZysGwKZNkxRwGXS9/WnMVt5xN0i2nvQny6WLS9NU63aYtukWl9oqHWVC4VAFCtiXUrB7BfoXewB9kT+W1zUpDsBrvh4CxFNMdaS9i1cQeAyymwAyPT01HnzBgXXQBW8OG441ZDeseLfFnQC7op+Xr9QVD45AIfv2TnFOgtbf+diidVEdURKDcjkfoJ8EClQHDGR5Y2AhaFKojhLv/gajK0AiHod94IPw94LvDX9sjP5T0JCIkEjrQQmQaX88kBBsSARi92IAH4CLofBBWNFklAQbAkYT8OE4TSWo7pElXHCbVOAbIL2BkKpjcLfq1QyXKuh9Fk7lCmJZnPlceUKLqHTRUDpNJIRGEQqiUIWj6HTRyKI9jFJ9CFHe+IFcQSgTh0fQZNDx3LD4ZdwJxEv8jfiO+0T9oEH10XmaB88MQN0g7rxNEMu4es6IsR3IPQL3tvOi7AfPlW0dEqEP486zwpSB0ETWJJuIiQQS+pfSaHMrNvRRcecB5NY+QVuH6oc7B+sGwraGPH/OkDWDXrxAtg149gxZ3f/pU1t/dinLy5p6754vC1m/V7x/Puh+qOOp1c3LAau3wbjzhW1wAtp73vLuxaD1e4zvPiPYp//CybX2axU1Bgmp1Z1tqr9XSHOQoHqbbKRYqXh0OFOtba6JQ4PQ0cFMKyv9FFcCN1JcLys7XU7g+e8d76ba+AYzOSSk29zbb5vCot3GuhK00clVD0nnjsaedhZfR4YWHecJ/5FQ/q0sQ81x3ge0h/a8zvwHac68TtyuPF9m8ujzJloat3wzzYWu55zrGu+qnVlXOaKyanAZFsydL8d9nZqgmvOjoXb7ZMRa98v0ANO87+Wkr30Itam1qTLUGAKkyH4KvvKVlfJ+CgFzCoHyvqk0HwpUmGvg+SoGzil2R0CbLpb7F9pFpVImtAo+67Lsq9E4NfnR263VsyShtVZxWHShoR3B0SpP62lUHDsMSz6ba2BHcDZNU565fDl9hSMvUSvNJ4T1vV9gUryKqZ+TqOnlr5LMlKeZ6OcZrwLLgbyKe6+aQPRfNxQgWlZu7QFE67qp9kD0UxsU/W3b0ST9YtEoXqtfHPjazry6qjkaxaNlg2mKX8bIYOW/pRw4Yp6aOENz0PkQAoS0zymW0sXTCfijIum8x6aswa0geLIycMQoAsVTHmvE6hCQQH0I8bSCeKrR6eQEMpgLilgcUJUNCIRULoMjmeugpHIPa8R3EJDNdwhJFYV4BhKC50ygovj42lHRGUbwf8BBVmJuu47b3zDV2WleHTG+UAunoW+6cvkVV9QlDijfaTAjIJUFXtDNcJ4FNpURgzXZbDu2LTU9UxNk2V2Do6IzjOD/gIOsJKfbdeX73zDV2WkHqiv5hVp4feibbgD21bAOQj3KxuU7DWak7EQqC7yAD2daENiatxoxWJMn5LZji8fRUEOzvWm5yisAICAPzkY4UTEJJJQYqBTZsxPj/nDvbguz1JF/2f07vvvPvLpVxnAlV86u0UkGX4pcKxsjw/3nhVJLld0OAAAA') format('woff2'),
        url('./iconfont.woff?t=1571556781525') format('woff'),
        url('./iconfont.ttf?t=1571556781525') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1571556781525#iconfont') format('svg'); /* iOS 4.1- */
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

    .iconsousuo:before {
        content: "\e615";
    }
`;

