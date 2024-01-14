import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hint from "@/components/hint";
import { Flag, FlagOff } from "lucide-react";

import { MotionDiv } from "./motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

const stagger = 0.2;

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export interface RepoProp {
    id: string;
    avatarUrl: string;
    fullName: string;
    description: string;
    isVisible: boolean;
}

export interface RepoCardProps {
    repo: RepoProp;
    handleRepo: (id: string) => void;
    index: number;
}

function RepoCard({ repo, handleRepo, index }: RepoCardProps) {
    const delay = (index / 2) * stagger;

    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 0.5, delay }}
            viewport={{ amount: 0 }}
            data-cy={`repo-card-${repo.id}`}
        >
            <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl">
                <CardContent className="grid gap-4 p-6">
                    <div className="flex items-center space-x-4">
                        <Image
                            src={repo.avatarUrl}
                            alt="avatar"
                            className="rounded-full object-cover aspect-square"
                            width={40}
                            height={40}
                            sizes="(min-width: 60em) 10vw,(min-width: 28em) 5vw,10vw"
                            data-cy={`repo-avatar-${repo.id}`}
                        />
                        <div className="flex-1 space-y-1 lg:w-auto w-[4rem]">
                            <p
                                className="text-xs font-bold lg:font-medium leading-none lg:text-lg text-ellipsis overflow-hidden"
                                data-cy={`repo-name-${repo.id}`}
                            >
                                {repo.fullName}
                            </p>
                            <p
                                className="text-xs text-muted-foreground lg:text-sm text-ellipsis overflow-hidden"
                                data-cy={`repo-description-${repo.id}`}
                            >
                                {repo.description}
                            </p>
                        </div>
                        <Hint label="Toggle Visibility" asChild>
                            <Button
                                className={cn(
                                    "bg-slate-600 hover:bg-slate-700",
                                    repo.isVisible && "bg-green-600 hover:bg-green-700"
                                )}
                                onClick={() => handleRepo(repo.id)}
                                data-cy="toggle-repo-visibility"
                            >
                                {repo.isVisible ? (
                                    <Flag className="w-6 h-6" data-cy={`repo-visible-${repo.id}`} />
                                ) : (
                                    <FlagOff className="w-6 h-6" data-cy={`repo-invisible-${repo.id}`} />
                                )}
                            </Button>
                        </Hint>
                    </div>
                </CardContent>
            </Card>
        </MotionDiv>
    );
}

export const RepoCardSkeleton = () => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl">
            <div className="flex items-center gap-x-4 transition p-6">
                <div className="bg-white p-1 rounded-full shrink-0 lg:mr-0">
                    <Skeleton className="w-14 h-14 rounded-full" />
                </div>
                <div className="space-y-1 grow">
                    <Skeleton className="h-2 lg:w-80 w-30" />
                    <Skeleton className="h-14 lg:w-80 w-30" />
                </div>
                <div className="shrink">
                    <Skeleton className="w-10 h-10" />
                </div>
            </div>
        </div>
    );
};
export default RepoCard;
