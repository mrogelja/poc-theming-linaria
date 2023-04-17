export class CssVar {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    asVar(defaultValue) {
        return defaultValue ? `var(${this.name}, ${defaultValue})` : `var(${this.name})`;
    }
    asRule() {
        return `${this.name} : ${this.toString()};`;
    }
    copy(value) {
        return new CssVar(this.name, value || this.value);
    }
    toString() {
        if (typeof this.value === "number") {
            return `${this.value}px`;
        }
        return `${this.value}`;
    }
}
//# sourceMappingURL=Theme.js.map