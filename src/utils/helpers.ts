// In a normal prod project I would use a package, such as:
// - https://github.com/antfu/vueuse/tree/main/packages/shared/useDebounce
// - https://github.com/sreejith-ms/lodash.debounce
export const debounce = (callBack: Function, delay = 300) => {
  let timer: number | NodeJS.Timeout;

  return function (...args: Parameters<any>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callBack(...args);
    }, delay);
  };
};
