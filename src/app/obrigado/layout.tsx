import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode }) {

    return (
        <>
            <h1>Página sem layout global!</h1>
            {children}
        </>
    )
};