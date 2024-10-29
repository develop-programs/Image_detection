// /c:/Users/shrey/Documents/Projects/Image_detection/src/function/encryption.ts

export function encrypt(text: string, shift: number): string {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
}

export function decrypt(text: string, shift: number): string {
    return encrypt(text, 26 - shift);
}

// Function to hash a password using a simple algorithm
export function hashPassword(password: string): string {
    const salt = 'random_salt'; // In a real-world scenario, use a unique salt for each password
    return encrypt(password + salt, 5);
}

// Function to verify a password against a hashed password
export function verifyPassword(password: string | undefined, hashedPassword: string): boolean {
    const salt = 'random_salt'; // Use the same salt used in hashPassword
    return hashedPassword === encrypt(password + salt, 5);
}