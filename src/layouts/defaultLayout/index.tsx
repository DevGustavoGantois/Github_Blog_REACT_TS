import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../components/Header";
import { Blog } from "../../pages/Blog";

export function DefaultLayout() {
    return (
        <>
        <Header />
        <LayoutContainer>
            <main>
            <Blog />
            <Outlet />  
            </main>
        </LayoutContainer>
        </>
    )
}