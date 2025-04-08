import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonLoader({ type, length }: any) {
  const renderSkeleton = () => {
    switch (type) {
      case 'avatar':
        return (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
        );
      case 'card':
        return (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-start justify-start flex-col w-full gap-3">
              <Skeleton className="h-4 w-9/12" />
              <Skeleton className="h-4 w-7/12" />
          </div>
        );
    }
  };

  return (
    <>
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="mb-6">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
}
