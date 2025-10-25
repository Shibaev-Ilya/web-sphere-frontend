(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Header/header.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// const burgerButton = document.querySelector(".js-burger") as HTMLButtonElement;
// const menuBlock = document.querySelector(".js-menu") as HTMLElement;
// const menuLinks = document.querySelectorAll(".js-header-link");
__turbopack_context__.s([
    "onBurgerClick",
    ()=>onBurgerClick
]);
const onBurgerClick = (e, open)=>{
    const currentTarget = e;
    if (open) {
        closeMenu();
    } else {
        openMenu();
    }
};
const openMenu = ()=>{
    document.querySelector(".js-menu").classList.add("open");
    document.querySelector(".js-burger").classList.add("open");
    document.body.classList.add("no-scroll");
};
const closeMenu = ()=>{
    document.querySelector(".js-menu").classList.remove("open");
    document.querySelector(".js-burger").classList.remove("open");
    document.body.classList.remove("no-scroll");
}; // burgerButton.addEventListener("click", onBurgerClick);
 // menuLinks.forEach(link => {
 //     link.addEventListener("click", () => {
 //         closeMenu();
 //     });
 // });
 // window.addEventListener("resize", () => {
 //     if (burgerButton.classList.contains("open")) {
 //         closeMenu();
 //     }
 // });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/BurgerMenu/BurgerMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BurgerMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$header$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header/header.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BurgerMenu() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$header$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBurgerClick"])(e.target, open),
        className: "header__burger js-burger",
        "aria-label": "menu",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "icon"
        }, void 0, false, {
            fileName: "[project]/src/app/components/BurgerMenu/BurgerMenu.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/BurgerMenu/BurgerMenu.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_s(BurgerMenu, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = BurgerMenu;
var _c;
__turbopack_context__.k.register(_c, "BurgerMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_af05f81c._.js.map