module.exports = [
"[project]/src/app/ui/sphere/sphere.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSphereStructure",
    ()=>createSphereStructure
]);
function createSphereStructure() {
    const mainWrapper = document.createElement("div");
    mainWrapper.className = "main-wrapper";
    const sphereWrapper = document.createElement("div");
    sphereWrapper.className = "sphere-wrapper";
    for(let planeNum = 1; planeNum <= 12; planeNum++){
        const plane = document.createElement("div");
        plane.className = `plane plane-${planeNum}`;
        for(let spokeNum = 1; spokeNum <= 36; spokeNum++){
            const spoke = document.createElement("div");
            spoke.className = `spoke spoke-${spokeNum}`;
            plane.appendChild(spoke);
        }
        sphereWrapper.appendChild(plane);
    }
    mainWrapper.appendChild(sphereWrapper);
    if (document.querySelector("#sphere")) {
        document.querySelector("#sphere").appendChild(mainWrapper);
    }
}
}),
"[project]/src/app/ui/sphere/Sphere.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$sphere$2f$sphere$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ui/sphere/sphere.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Sphere() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$sphere$2f$sphere$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSphereStructure"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sphere-container",
        id: "sphere"
    }, void 0, false, {
        fileName: "[project]/src/app/ui/sphere/Sphere.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_ui_sphere_7d5fa763._.js.map