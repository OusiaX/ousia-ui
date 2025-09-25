import type {
  Props as PresenceProps,
} from "@zag-js/presence";
import { machine as presenceMachine, connect as presenceConnect} from "@zag-js/presence";
import { normalizeProps, useMachine } from "@zag-js/react";
import { useRef } from "react"
import type { Optional } from "@/types";
import type { RenderStrategyProps } from "@/utils/render-strategy";
import { useEvent } from "@/utils/use-event";

export interface UsePresenceProps
  extends Optional<PresenceProps, "present">,
    RenderStrategyProps {
  /**
   * Whether to allow the initial presence animation.
   * @default false
   */
  skipAnimationOnMount?: boolean | undefined;
}
export type UsePresenceReturn = ReturnType<typeof usePresence>;

export const usePresence = (props: UsePresenceProps = {}) => {
  const {
    lazyMount,
    unmountOnExit,
    present,
    skipAnimationOnMount = false,
    ...rest
  } = props;
  const wasEverPresent = useRef(false);
  const machineProps: Partial<PresenceProps> = {
    ...rest,
    present,
    onExitComplete: useEvent(props.onExitComplete),
  };

  const service = useMachine(presenceMachine, machineProps);
  const api = presenceConnect(service, normalizeProps);

  if (api.present) {
    wasEverPresent.current = true;
  }

  const unmounted =
    (!api.present && !wasEverPresent.current && lazyMount) ||
    (unmountOnExit && !api.present && wasEverPresent.current);

  const getPresenceProps = () => ({
    "data-state":
      api.skip && skipAnimationOnMount
        ? undefined
        : present
        ? "open"
        : "closed",
    hidden: !api.present,
  });

  return {
    ref: api.setNode,
    getPresenceProps,
    present: api.present,
    unmounted,
  };
};
