"use client";

import {
  createContext,
  useState,
  useTransition,
  type Context,
  type Dispatch,
  type SetStateAction,
  type TransitionStartFunction,
} from "react";

interface SiteContext {
  isMutating: boolean;
  mutationFailed: boolean;
  setFailed: Dispatch<SetStateAction<boolean>>;
  setFetching: Dispatch<SetStateAction<boolean>>;
  startTransition: TransitionStartFunction;
}

export let SiteContext: Context<SiteContext>;

export function SiteContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPending, startTransition] = useTransition();
  const [isFailed, setFailed] = useState(false);
  const [isFetching, setFetching] = useState(false);

  // if isMutating is true then update data optimisicly
  // if mutationFailed is true then rollback the update
  const isMutating = isPending || isFetching;
  const mutationFailed = !isFetching && isFailed;

  SiteContext = createContext({
    isMutating ,
    mutationFailed ,
    setFailed,
    setFetching,
    startTransition,
  });

  return <SiteContext.Provider value={{ isMutating, mutationFailed, setFailed, setFetching, startTransition }}>{children}</SiteContext.Provider>;
}
