const _matchWan = (num) => {
    num = +num;
    if (num > 9999) {
        num = parseInt(num / 1000) / 10; // 向下取整
        num = num + '万'
    }
    return num;
}

export default _matchWan;