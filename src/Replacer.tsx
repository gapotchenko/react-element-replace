import * as React from "react";

import { ReplacerProps, replaceInTree } from "./replace-in-tree";

function Replacer<StateType = any>(
  props: React.PropsWithChildren<ReplacerProps<StateType>>
): React.ReactElement {
  return <>{replaceInTree(props.children, props)}</>;
}

export { Replacer };
