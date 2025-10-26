(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/ui/sphere/sphere.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ui/sphere/Sphere.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$sphere$2f$sphere$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ui/sphere/sphere.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Sphere() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sphere.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ui$2f$sphere$2f$sphere$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSphereStructure"])();
        }
    }["Sphere.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sphere-container",
        id: "sphere"
    }, void 0, false, {
        fileName: "[project]/src/app/ui/sphere/Sphere.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_s(Sphere, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Sphere;
var _c;
__turbopack_context__.k.register(_c, "Sphere");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_ui_sphere_0d47501d._.js.map