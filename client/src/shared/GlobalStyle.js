import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} menu,article,aside,details,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#141414}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}

    * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

    .clearfix:after { visibility: hidden; display: block; font-size: 0; content: ""; clear: both; height: 0;}

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.8rem;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        height: 100vh;
    }

    h1, h2, h3, h4, h5, h6, p {
	    padding: 0;
        margin: 0;
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
    }

    img {
        max-width: 100%;
          display: block;
    }

    .wrapper {
        max-width: 1280px;
        width: 80%;
        margin: 0 auto;
    }

    .visuallyhidden:not(:focus):not(:active) {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
   }

   h1 {
    font-family: 'Montserrat', sans-serif;
   }
`;

export default GlobalStyle;