/**
 * 防抖函数 , 防抖函数只执行一次，后面执行的都是其返回的函数
 */
export function debounce(func, delay = 50) {
    let timer = null; //该timer只会执行一次

    return function(...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            //console.log("执行一次");
            func.apply(this, args);
        }, delay);
    };
}