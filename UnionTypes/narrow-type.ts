type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function networkStatus(state: NetworkState): string {
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      return `Error ${state.code} downloading`;
    case "success":
      return `Download ${state.response.title} - ${state.response.summary}`;
  }
}
