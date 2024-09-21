import 'styled-components';
import { defaultTheme } from '../styles/Theme/Default';


type ThemeType = typeof defaultTheme;


declare module 'styled-components' {
    export interface defaultTheme extends ThemeType {}
}