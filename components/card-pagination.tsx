"use client";

import { useMemo } from "react";

import RepoCard, { RepoProp, RepoCardSkeleton } from "./repo-card";
import { useStorage } from "@/hooks/use-filter";

interface CardPaginationProps {
    repos: RepoProp[];
}

function CardPagination({ repos }: CardPaginationProps) {
    const { visibleRepos, handleVisibleRepos } = useStorage();

    const modifiedRepoData: RepoProp[] = useMemo(() => {
        if (visibleRepos.length === 0) {
            return repos;
        }
        return repos.map((obj: RepoProp) => ({
            ...obj,
            isVisible: visibleRepos.includes(obj.id) ? true : false,
        }));
    }, [visibleRepos, repos]);

    return (
        <section className="grid grid-cols-1 gap-10">
            {modifiedRepoData.map((repo: RepoProp, index: number) => (
                <RepoCard key={repo.id} repo={repo} index={index} handleRepo={handleVisibleRepos} />
            ))}
        </section>
    );
}
export function CardPaginationSkeleton() {
    return (
        <section className="grid grid-cols-1 gap-10">
            {[...Array(10)].map((_, index) => (
                <RepoCardSkeleton key={index} />
            ))}
        </section>
    );
}
export default CardPagination;
