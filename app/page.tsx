import LoadMore from "@/components/load-more";

export default async function Home() {
    return (
        <main>
            <section className="py-16">
                <div className="container">
                    <div className="mb-12 flex items-center justify-between gap-x-16">
                        <h1 className="text-3xl font-bold">Repos</h1>
                    </div>
                    <LoadMore />
                </div>
            </section>
        </main>
    );
}
