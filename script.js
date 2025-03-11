// 1. Filter inventors born in the 1500s
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
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