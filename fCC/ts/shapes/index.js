console.log("Welcome to TypeScript");
let shapeTypeSelect;
let propertyGroups;
let propertyInputs;
let resultCard;
let resultText;
function getElement(id) {
    const el = document.getElementById(id);
    if (!el) {
        throw new Error(`Element not found: ${id}`);
    }
    return el;
}
function chooseShape(shapeType) {
    Object.entries(propertyGroups).forEach(([name, group]) => {
        if (name === shapeType) {
            group.classList.remove("hidden");
        }
        else {
            group.classList.add("hidden");
        }
    });
}
function toggleResultCard(show) {
    show ?
        resultCard.classList.add("visible")
        : resultCard.classList.remove("visible");
}
function calculateArea(shape) {
    switch (shape.type) {
        case "circle":
            return `Area of Circle: ${(Math.PI * shape.radius ** 2).toFixed(2)}`;
        case "rectangle":
            return `Area of Rectangle: ${shape.width * shape.height}`;
        case "triangle":
            return `Area of Triangle: ${0.5 * shape.base * shape.height}`;
        default:
            const _nonExistent = shape;
            return _nonExistent;
    }
}
function updateResult() {
    const shape = shapeTypeSelect.value;
    let result = "";
    if (shape === "circle") {
        result = calculateArea({
            type: "circle",
            radius: Number(propertyInputs.radius.value),
        });
    }
    else if (shape === "rectangle") {
        result = calculateArea({
            type: "rectangle",
            width: Number(propertyInputs.width.value),
            height: Number(propertyInputs.height.value),
        });
    }
    else if (shape === "triangle") {
        result = calculateArea({
            type: "triangle",
            base: Number(propertyInputs.base.value),
            height: Number(propertyInputs.triangleHeight.value),
        });
    }
    resultText.textContent = result;
}
function clearInputFields() {
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
}
function handleShapeSelect(e) {
    e.preventDefault();
    clearInputFields();
    const val = e.currentTarget;
    if (!val) {
        return "Target value not found";
    }
    const hasSelection = Boolean(val.value);
    toggleResultCard(hasSelection);
    chooseShape(val.value);
    updateResult();
}
function handleInput(e) {
    const value = Number(e.target.value);
    if (value < 0) {
        alert("Negative values are not allowed.");
        clearInputFields();
    }
    updateResult();
}
function initializeApp() {
    shapeTypeSelect = getElement("shape-type");
    propertyGroups = {
        circle: getElement("circle-props"),
        rectangle: getElement("rectangle-props"),
        triangle: getElement("triangle-props"),
    };
    propertyInputs = {
        radius: getElement("radius"),
        width: getElement("width"),
        height: getElement("height"),
        base: getElement("base"),
        triangleHeight: getElement("triangle-height"),
    };
    resultCard = getElement("result-card");
    resultText = getElement("result-text");
    shapeTypeSelect.oninput = handleShapeSelect;
    for (const [, input] of Object.entries(propertyInputs)) {
        input.oninput = handleInput;
    }
}
document.addEventListener("DOMContentLoaded", initializeApp);
export {};
//# sourceMappingURL=index.js.map