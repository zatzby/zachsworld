export function formatTimestamp(unixTimestamp?: number): string {
    if (unixTimestamp === undefined) {
        return 'Unknown Date';
    }

    const date = new Date(unixTimestamp * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}