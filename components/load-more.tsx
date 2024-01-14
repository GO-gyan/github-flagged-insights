"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState, useMemo } from "react";

import RepoCard, { RepoProp, RepoCardSkeleton } from "./repo-card";
import { fetchRepos } from "@/actions/fetch-repos";
import { useStorage } from "@/hooks/use-filter";

let page = 1;

function LoadMore() {
    const { ref, inView } = useInView();
    const { visibleRepos, handleVisibleRepos } = useStorage();
    const [data, setData] = useState<RepoProp[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const modifiedRepoData: RepoProp[] = useMemo(() => {
        if (visibleRepos.length === 0) {
            return data;
        }
        return data.map((obj) => ({
            ...obj,
            isVisible: visibleRepos.includes(obj.id) ? true : false,
        }));
    }, [visibleRepos, data]);

    useEffect(() => {
        if (inView) {
            setIsLoading(true);
            const delay = 500;

            const timeoutId = setTimeout(() => {
                fetchRepos({ page }).then((res) => {
                    setData([...data, ...res]);
                    page++;
                });

                setIsLoading(false);
            }, delay);

            return () => clearTimeout(timeoutId);
        }
    }, [inView, data, isLoading]);

    return (
        <>
            <div className="grid grid-cols-1 gap-10">
                {modifiedRepoData.map((repo: RepoProp, index: number) => (
                    <RepoCard key={repo.id} repo={repo} index={index} handleRepo={handleVisibleRepos} />
                ))}
            </div>

            <div ref={ref} data-cy="load-more-skeleton">
                {inView && isLoading && (
                    <div className="grid grid-cols-1 gap-10 py-10">
                        {[...Array(5)].map((_, index) => (
                            <RepoCardSkeleton key={index} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default LoadMore;
