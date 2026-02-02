/**
 * Format price for Vietnamese locale
 * Uses comma (,) as decimal separator and dot (.) as thousands separator
 * Example: 1250000 -> "1.250.000"
 */
export function formatPrice(price: number): string {
    return price.toLocaleString("vi-VN");
}

/**
 * Mask phone number for privacy
 * Example: "0123456789" -> "01** *** *89"
 */
export function maskPhoneNumber(phone: string): string {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, "");

    if (digits.length < 4) {
        return phone; // Return original if too short
    }

    const first2 = digits.slice(0, 2);
    const last2 = digits.slice(-2);
    const middleLength = digits.length - 4;

    // Create masked middle part with spacing
    let masked = first2;
    let remainingStars = middleLength;

    // Format as: XX** *** *XX
    if (remainingStars >= 2) {
        masked += "**";
        remainingStars -= 2;
    }

    masked += " ";

    if (remainingStars >= 3) {
        masked += "***";
        remainingStars -= 3;
    } else {
        masked += "*".repeat(remainingStars);
        remainingStars = 0;
    }

    masked += " ";

    if (remainingStars > 0) {
        masked += "*".repeat(remainingStars);
    }

    masked += "*" + last2;

    return masked;
}

/**
 * Mask email for privacy
 * Example: "nguyenvana@email.com" -> "ng****na@email.com"
 */
export function maskEmail(email: string): string {
    const [localPart, domain] = email.split("@");

    if (!domain || localPart.length < 4) {
        return email;
    }

    const first2 = localPart.slice(0, 2);
    const last2 = localPart.slice(-2);

    return `${first2}****${last2}@${domain}`;
}
