(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Intro/intro.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/components/Intro/Intro.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/components/Intro/Intro.tsx'\n\nExpected ',', got 'export'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_app_components_Intro_b8f920e6._.js.map