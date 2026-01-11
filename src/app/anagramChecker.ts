/**
 * Checks whether two strings are anagrams.
 * - Ignores case
 * - Ignores spaces
 */
export class AnagramChecker{
    public isAnagram(str1: string, str2: string): boolean {
        if (!str1 || !str2) return false;
    
        const clearStr1 = this.cleanString(str1);
        const clearStr2 = this.cleanString(str2);

        if(clearStr1.length != clearStr2.length) return false;

        return this.sortString(clearStr1) === this.sortString(clearStr2);
    }

    /**
     * Removes spaces and converts the string to lowercase
     */
    private cleanString(value: string): string {
        return value.toLowerCase().replace(/\s+/g, '');
    }

    /**
     * Sorts characters in a string alphabetically
     */
    private sortString(value: string): string {
        return value.split('').sort().join('');
    }
}