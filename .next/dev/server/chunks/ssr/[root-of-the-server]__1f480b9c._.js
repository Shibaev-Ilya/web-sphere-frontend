module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/components/Header/header.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// const burgerButton = document.querySelector(".js-burger") as HTMLButtonElement;
// const menuBlock = document.querySelector(".js-menu") as HTMLElement;
// const menuLinks = document.querySelectorAll(".js-header-link");
__turbopack_context__.s([
    "onBurgerClick",
    ()=>onBurgerClick
]);
const onBurgerClick = (e)=>{
    const currentTarget = e;
    if (currentTarget.curren.classList.contains("open")) {
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
}),
"[project]/src/app/components/BurgerMenu/BurgerMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BurgerMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$header$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header/header.ts [app-ssr] (ecmascript)");
'use client';
;
;
function BurgerMenu() {
    const [open, setOpen] = useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$header$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBurgerClick"])(e.target),
        className: "header__burger js-burger",
        "aria-label": "menu",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1f480b9c._.js.map