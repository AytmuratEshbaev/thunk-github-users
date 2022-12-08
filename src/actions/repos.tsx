export function dataIsLoading(loading: boolean) {
  return {
    type: "DATA_IS_LOADING",
    isLoading: loading,
  };
}

export function dataLoadedSuccess(data: any) {
  return {
    type: "DATA_LOADED_SUCCESS",
    data,
  };
}

export function fetchData(url: string) {
  return (dispatch: any) => {
    dispatch(dataIsLoading(true));

    fetch(url)
      .then((response) => {
        dispatch(dataIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(dataLoadedSuccess(data)));
  };
}
