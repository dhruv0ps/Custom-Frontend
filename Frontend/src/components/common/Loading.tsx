import { Loader2Icon } from "lucide-react";

interface LoadingProps {
    full?: boolean;
}

export const Loading = ({ full = false }: LoadingProps) => {
    return full ? <div className='flex h-screen items-center justify-center'><Loading /></div>
        : (<div className="flex justify-center items-center overflow-hidden text-xl text-primary h-[500px]">
            <Loader2Icon className="mr-2 h-9 w-9 animate-spin" /> Please wait
        </div>);
}