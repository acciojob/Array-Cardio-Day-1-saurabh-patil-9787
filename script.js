// 1. Filter inventors born in the 1500s
export function myfilter() {
    return inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    // Returns: Galileo Galilei (1564), Johannes Kepler (1571)
}

// 2. Map to full names
export function map() {
    return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    // Returns: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', ...]
}

// 3. Sort by birthdate (oldest to youngest)
export function sort() {
    return [...inventors].sort((a, b) => a.year - b.year);
    // Returns array sorted from Copernicus (1473) to Blodgett (1898)
    // Using spread operator [...inventors] to avoid mutating original array
}

// 4. Total years lived
export function reduce() {
    return inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    // Returns: 861 (sum of all lifespans)
}

// 5. Sort by years lived
export function sortbylived() {
    return [...inventors].sort((a, b) => {
        const lifespanA = a.passed - a.year;
        const lifespanB = b.passed - b.year;
        return lifespanB - lifespanA; // Descending order (longest lived first)
    });
    // Returns array sorted from longest-lived to shortest-lived
}

// 6. Sort people by last name
export function sortByLastName() {
    return [...people].sort((a, b) => {
        const lastNameA = a.split(', ')[0];
        const lastNameB = b.split(', ')[0];
        return lastNameA.localeCompare(lastNameB);
    });
    // Returns array sorted alphabetically by last name
}

// 7. Sum up instances of transportation methods
export function reducedSum() {
    return data.reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {});
    // Returns: {
    //   car: 5,
    //   truck: 3,
    //   bike: 2,
    //   walk: 2,
    //   van: 2,
    //   pogostick: 1
    // }
}