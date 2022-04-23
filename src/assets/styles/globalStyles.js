import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;
