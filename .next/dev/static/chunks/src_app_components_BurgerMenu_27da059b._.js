(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/BurgerMenu/burgerHanler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handlerMenu",
    ()=>handlerMenu
]);
const toggleMenu = ()=>{
    document.querySelector(".js-menu").classList.toggle("open");
    document.querySelector(".js-burger").classList.toggle("open");
    document.body.classList.toggle("no-scroll");
};
const handlerMenu = (open, setOpen)=>{
    if (open) {
        toggleMenu();
        setOpen((prev)=>!prev);
    } else {
        toggleMenu();
        setOpen((prev)=>!prev);
    }
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$BurgerMenu$2f$burgerHanler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/BurgerMenu/burgerHanler.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BurgerMenu() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$BurgerMenu$2f$burgerHanler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlerMenu"])(open, setOpen),
        className: "header__burger js-burger",
        "aria-label": "menu",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "icon"
        }, void 0, false, {
            fileName: "[project]/src/app/components/BurgerMenu/BurgerMenu.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/BurgerMenu/BurgerMenu.tsx",
        lineNumber: 8,
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

//# sourceMappingURL=src_app_components_BurgerMenu_27da059b._.js.map