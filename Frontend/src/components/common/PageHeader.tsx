import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader(props: PageHeaderProps) {
  const [greeting, setGreeting] = useState<string | null>(null);
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight text-left text-primary flex items-center space-x-2">
        <span>{props.title}</span>
        {["Real-Time Reporting", "Live Vehicle Tracker"].includes(
          props.title
        ) && (
          <span className="relative flex h-3 w-3 translate-y-0.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
          </span>
        )}
      </h2>
      <p>
        {greeting}, {user?.first_name}
      </p>
      <Separator className="my-4" />
    </>
  );
}
