function createSphereStructure() {
    const mainWrapper = document.createElement("div");
    mainWrapper.className = "main-wrapper";

    const sphereWrapper = document.createElement("div");
    sphereWrapper.className = "sphere-wrapper";

    for (let planeNum = 1; planeNum <= 12; planeNum++) {
        const plane = document.createElement("div");
        plane.className = `plane plane-${planeNum}`;

        for (let spokeNum = 1; spokeNum <= 36; spokeNum++) {
            const spoke = document.createElement("div");
            spoke.className = `spoke spoke-${spokeNum}`;
            plane.appendChild(spoke);
        }

        sphereWrapper.appendChild(plane);
    }

    mainWrapper.appendChild(sphereWrapper);

    document.querySelector("#sphere").appendChild(mainWrapper);
}

createSphereStructure();
