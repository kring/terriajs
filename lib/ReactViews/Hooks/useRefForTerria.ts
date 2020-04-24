import { Ref, useRef, useEffect } from "react";
import ViewState from "../../ReactViewModels/ViewState";

// really unsure if we update the app ref or leave it to the component to set,
// but it makes most sense to run it this way for now
export function useRefForTerria(
  refName: string,
  viewState: ViewState // todo: reach into store without passing hook(?)
): Ref<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    viewState.updateAppRef(refName, ref);
  }, [ref]);
  return ref;
}
