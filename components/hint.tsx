import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    asChild: boolean;
}
function Hint({ label, children, asChild }: HintProps) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent className="text-black bg-white">
                    <p className="font-semibold" data-cy="hint-label">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default Hint;
