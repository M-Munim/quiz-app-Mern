export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnpoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flag_Result(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints;
}