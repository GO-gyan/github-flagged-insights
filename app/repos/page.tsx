import Link from "next/link";
import { Suspense } from "react";

import { fetchRepos } from "@/actions/fetch-repos";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CardPagination, { CardPaginationSkeleton } from "@/components/card-pagination";
import Await from "@/components/await";

async function ReposPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const page = typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
    const perPage = typeof searchParams.per_page === "string" ? Number(searchParams.per_page) : 10;

    const promise = fetchRepos({ page, perPage });

    return (
        <main>
            <section className="py-16">
                <div className="container">
                    <div className="mb-12 flex items-center justify-between gap-x-16">
                        <h1 className="text-3xl font-bold">Repos</h1>
                        <div className="flex space-x-6">
                            <Button asChild className={cn("px-3 py-1", page <= 1 && "pointer-events-none opacity-50")}>
                                <Link
                                    href={{
                                        pathname: "/repos",
                                        query: {
                                            page: page > 1 ? page - 1 : 1,
                                        },
                                    }}
                                >
                                    Previous
                                </Link>
                            </Button>
                            <Button asChild className="px-3 py-1">
                                <Link
                                    href={{
                                        pathname: "/repos",
                                        query: {
                                            page: page + 1,
                                        },
                                    }}
                                >
                                    Next
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <Suspense fallback={<CardPaginationSkeleton />}>
                        <Await promise={promise}>{(repos) => <CardPagination repos={repos} />}</Await>
                    </Suspense>
                </div>
            </section>
        </main>
    );
}

export default ReposPage;
