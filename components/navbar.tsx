import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navbar() {
    return (
        <header className="fixed top-0 w-full h-14 px-14 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full ">
                <Link href="/">
                    <div className="hover:opacity-75 transition items-centergap-x-2 md:flex">
                        <p className="text-lg text-neutral-700 pb-1">Flagged</p>
                    </div>
                </Link>
                <nav className="lg:ml-6 md:w-auto flex items-center justify-between w-full">
                    <Button size={"sm"} variant="ghost" asChild>
                        <Link href="/repos">Repos</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
