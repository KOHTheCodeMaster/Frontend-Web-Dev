export class Category {

    private static lastCategoryId: number = 1;

    private id: number;
    private name: string;

    constructor(name: string) {
        this.id = Category.lastCategoryId++;
        this.name = name;
    }

    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

}
