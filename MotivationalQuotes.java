import java.util.Random;

public class MotivationalQuotes {

    // Array of motivational quotes
    private static final String[] quotes = {
        "Believe you can and you're halfway there.",
        "The only way to do great work is to love what you do.",
        "Don't watch the clock; do what it does. Keep going.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The harder you work for something, the greater you'll feel when you achieve it."
    };

    /**
     * Get a random motivational quote.
     * @return a random quote from the quotes array
     */
    public static String getRandomQuote() {
        Random random = new Random();
        int index = random.nextInt(quotes.length);
        return quotes[index];
    }

    public static void main(String[] args) {
        System.out.println("Your motivational quote for the day:");
        System.out.println(getRandomQuote());
    }
}
