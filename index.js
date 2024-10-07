function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Example usage:
const games = [
    { year: '2015', result: 'W' },
    { year: '2016', result: 'L' },
];

console.log(superbowlWin(games)); // Outputs: '2015'