function levenshteinDistance(str1 :string, str2:string) {
    const m = str1.length;
    const n = str2.length;

    // Create a matrix to store the distances
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Initialize the matrix with the distances from the empty string
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Fill the matrix with the distances
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,      // Deletion
                dp[i][j - 1] + 1,      // Insertion
                dp[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    // The bottom-right cell contains the Levenshtein distance
    return dp[m][n];
}


export const  findClosestMatch = (searchTerm :string, wordList:string[])=> {
    let minDistance = Infinity;
    let closestMatch = "";
    let recommendewords = [];

    for (const word of wordList) {
        const distance = levenshteinDistance(searchTerm, word);
        if(distance < 4) recommendewords.push(word);
        if (distance < minDistance) {
            minDistance = distance;
            closestMatch = word;
        }
    }

    return (
        {
        closestMatch, recommendewords}
    )
}
