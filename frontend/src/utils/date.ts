export function getLocalDateDash(dt: Date = new Date()) {
    return dt.toLocaleDateString().split('/').join('-');
}

export const DateTodayBash = ()=>getLocalDateDash();