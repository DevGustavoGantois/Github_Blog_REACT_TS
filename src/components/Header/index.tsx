import { HeaderContainer } from "./styles";
import logoSrc from '../../assets/logo (4).svg';

export function Header() {
    return (
        <HeaderContainer>
                <img src={logoSrc} alt="" />
        </HeaderContainer>
    )
}