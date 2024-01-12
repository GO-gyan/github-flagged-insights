"use server";

type FetchReposProps = {
    page: number;
    perPage?: number;
}
export const fetchRepos = async ({ page, perPage }: FetchReposProps = { page: 1, perPage: 10 }) => {
    let data = null;

    try {
        const response = await fetch(`https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=${perPage}&page=${page}`);
        const res = await response.json();
        data = res.items.map((item: any) => {
            return {
                id: `${item.id}`,
                avatarUrl: item.owner.avatar_url,
                fullName: item.full_name,
                description: item.description,
                isVisible: false,
            }
        });
    } catch {
        throw new Error("Failed to fetch repos");
    }

    return data;
}
