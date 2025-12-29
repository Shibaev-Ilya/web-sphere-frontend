import DiffMatchPatch from "diff-match-patch";

const dmp = new DiffMatchPatch();
const compareButton = document.querySelector(".js-compare");
function compareTexts() {
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;
    const diffs = dmp.diff_main(text1, text2);
    dmp.diff_cleanupSemantic(diffs);

    let html = "";
    let inserted = 0;
    let deleted = 0;
    let equal = 0;

    diffs.forEach((el) => {
        const type = el["0"];
        const text = el["1"];
        const escapedText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        switch (type) {
        case -1:
            html += `<del class="diff-deleted">${escapedText}</del>`;
            deleted += text.length;
            break;
        case 1:
            html += `<ins class="diff-inserted">${escapedText}</ins>`;
            inserted += text.length;
            break;
        case 0:
            html += `<span class="diff-unchanged">${escapedText}</span>`;
            equal += text.length;
            break;
        }
    });

    const total = inserted + deleted + equal;
    const similarity = total > 0 ? ((equal / total) * 100).toFixed(2) : "100";

    document.getElementById("result").innerHTML = similarity === "100" ? "Тексты одинаковые" : html;



    document.getElementById("stats").innerHTML = `
                <strong>Статистика:</strong><br>
                Удалено символов: ${deleted}<br>
                Добавлено символов: ${inserted}<br>
                Общих символов: ${equal}<br>
                Совпадение: ${similarity}%
            `;
    document.querySelector("[data-results]").style.opacity = "1";
}

function clearTexts() {
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
}

if (compareButton) {
    document.querySelector(".js-compare").addEventListener("click", compareTexts);
    document.querySelector(".js-reset").addEventListener("click", clearTexts);
}
