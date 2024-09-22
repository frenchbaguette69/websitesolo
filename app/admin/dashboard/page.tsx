export default function Dashboard() {
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="font-bold text-5xl mb-5">Welkom 👋</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                    </div>
                    <div className="rounded-lg border bg-background p-6 shadow-sm hidden md:block">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Order Management</h2>
                            <button className="btn btn-sm">View All Orders</button>
                        </div>
                        <div className="mt-6 ">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
