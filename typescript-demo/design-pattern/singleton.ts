class Singleton {
    private static instance: Singleton;

    private constructor() {}

    /**
     * 
     * @returns The Singleton instance.
     */
    public static getInstance(): Singleton {
        if (!this.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public printName(): void {
        console.log("The Unique Singleton");
    }
}