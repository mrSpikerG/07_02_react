export class Duck {
    private id: Number;
    private icon: String;

    private xDirection: Number;
    private yDirection: Number;

    private x: Number;
    private y: Number;

    constructor(id, icon = 'https://i.imgur.com/DeICLOV.png') {
        this.icon = icon;
        this.id = id;
        this.resetDuck();
    
    }

    getIcon(): String {
        if (this.xDirection === -1) {
            return 'https://i.imgur.com/qTmzrId.png';
        }
        return this.icon;
    }
    getId() : Number {
        return this.id;
    }

    getX(): Number {
        return this.x;
    }

    getY(): Number {
        return this.y;
    }

    move() {
        this.x = +this.x + +this.xDirection;
        this.y = +this.y + +this.yDirection;

        if (this.x <= 0) {
            this.xDirection = 1;
        }
        if (this.y <= 0) {
            this.yDirection = 1;
        }

        if (this.y >= 700) {
            this.resetDuck();

        }

        if (this.x >= 1800) {
            this.xDirection = -1;
        }
    }

    resetDuck() {
        this.x = Math.random() * 1000;
        this.y = -Math.random() * 400;
        this.xDirection = Math.sign(Math.random() - 0.5);
        this.yDirection = Math.sign(Math.random() - 0.5);
    }

    killDuck() {
        this.resetDuck();

    }

}