import NProgress from "nprogress";

export const startLoading = () => {
  NProgress.configure({ showSpinner: false, trickleSpeed: 100 });
  NProgress.start();
};

export const stopLoading = () => {
  NProgress.done();
};
