import NavigationSidebar from "@/components/navigation/navigation-sidebar"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-[72px].z-30.flex-col fixed inset-y-0 bg-slate-800">
                <NavigationSidebar />
            </div>
            <main className="h-full md:pl-[72px]">
                {children}
            </main>
        </div>
    )
}

export default MainLayout