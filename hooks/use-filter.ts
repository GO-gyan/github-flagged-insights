import { useLocalStorage } from 'usehooks-ts';
import { toast } from "sonner";

export const useStorage = () => {
    const [visibleRepos, setVisibleRepos] = useLocalStorage<string[]>('visibleRepos', []);

    const handleVisibleRepos = (id: string) => {
        if (visibleRepos.includes(id)) {
            setVisibleRepos(visibleRepos.filter((repo) => repo !== id));
            toast.success("Removed visibility of repo: " + id);
        } else {
            setVisibleRepos([...visibleRepos, id]);
            toast.success("Added visibility of repo: " + id);
        }
    }

    return {
        visibleRepos,
        handleVisibleRepos
    };
}