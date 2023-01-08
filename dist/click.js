"use strict";
{
    function clickHandle(message) {
        console.log("クリックされました" + message);
    }
    const button = document.querySelector("button");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
        clickHandle("テスト");
        console.log("clicked!!");
    });
}
//# sourceMappingURL=click.js.map