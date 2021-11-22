import React, {ReactNode} from 'react';
import Navbar from "../navbar";

const Layout: React.FC<ReactNode> = ({ children }) => {
    return (
        <div className={"w-screen h-screen bg-gray-100"}>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
