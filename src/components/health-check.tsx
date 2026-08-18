"use client";

import { trpc } from "@/lib/trpc";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export function HealthCheck() {
  const { data, isLoading, error } = trpc.health.useQuery();

  if (isLoading) {
    return <Skeleton className="h-6 w-24" />;
  }

  if (error) {
    return (
      <Badge className="" variant="destructive">
        API Error : {error.toString()}
      </Badge>
    );
  }

  return (
    <Badge variant={"secondary"}>
      API: {data?.status} {data?.timestamps}
    </Badge>
  );
}
