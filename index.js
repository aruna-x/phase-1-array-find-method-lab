
const superbowlWin = (record) => {
    const wFound = record.find(isW);
    if (wFound) {
        return wFound['year'];
    } else {
        return undefined;
    }
}

function isW(el) {
    if(el['result'] === 'W') {
        return true;
    } else {
        return false;
    }
}