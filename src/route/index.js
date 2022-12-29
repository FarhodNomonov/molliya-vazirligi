import Codex from "../components/codex";
import Main from "../components/main";

export const RootRoutes = [
  {
    key: 0,
    path: "/",
    element: <Main />,
  },
  {
    key: 1,
    path: "/codex",
    element: <Codex />,
  },
];
