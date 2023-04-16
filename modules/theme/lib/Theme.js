export class CssVar {
    name;
    value;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    asVar() {
        return `var(${this.name})`;
    }
    asRule() {
        return `${this.name} : ${this.value};`;
    }
}
//# sourceMappingURL=Theme.js.map