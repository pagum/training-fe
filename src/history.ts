import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.tgHistory = history;
}

export function clearHistoryState() {
  // clear history state before app load to avoid suppress any effects
  history.replace({
    ...history.location,
    state: undefined,
  });
}
