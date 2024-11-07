import MobileNav from "@/components/custom/MobileNav";
import Navbar from "@/components/custom/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen">
            <div className="absolute inset-0 w-full h-24 z-50">
                <div className="block lg:hidden">
                    <MobileNav />
                </div>
                <div className="hidden lg:block">
                    <Navbar />
                </div>
            </div>
            {children}
        </main>
    )
}
