/*格式化时间*/
export function parseTime(time, format = '{y}-{m}-{d} {h}:{i}:{s}') {
    if (arguments.length === 0) {
        return null;
    }
    let date;
    if (typeof(time) === 'object') {
        date = time;
    } else {
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    return format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
        let value = formatObj[key];
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
}