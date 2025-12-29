const separator = document.getElementById("separator-translit");
const copyBtn = document.querySelector("#copy-btn");
const resultElement = document.querySelector("#result-translit");
const textInputElement = document.querySelector("#text-translit");

const seoTransliterate = (text, separator) => {
    if (!text || typeof text !== "string") return "";

    const transliterationMap = {
        // Одиночные буквы
        "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
        "е": "e", "ё": "yo", "ж": "zh", "з": "z",
        "и": "i", "й": "y", "к": "k", "л": "l", "м": "m",
        "н": "n", "о": "o", "п": "p", "р": "r", "с": "s",
        "т": "t", "у": "u", "ф": "f", "х": "h", "ц": "ts",
        "ч": "ch", "ш": "sh", "щ": "sch", "ъ": "",
        "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya",

        // Английские буквы остаются как есть
        "a": "a", "b": "b", "c": "c", "d": "d", "e": "e",
        "f": "f", "g": "g", "h": "h", "i": "i", "j": "j",
        "k": "k", "l": "l", "m": "m", "n": "n", "o": "o",
        "p": "p", "q": "q", "r": "r", "s": "s", "t": "t",
        "u": "u", "v": "v", "w": "w", "x": "x", "y": "y",
        "z": "z"
    };

    const textLower = text?.toLowerCase() || "";
    let result = "";

    for (let i = 0; i < textLower.length; i++) {
        const char = textLower[i];
        const nextChar = textLower[i + 1];

        if (char === "ь") {
            if (nextChar === "е") {
                result += "ye";
                i++;
            } else if (nextChar === "ё") {
                result += "yo";
                i++;
            } else if (nextChar === "ю") {
                result += "yu";
                i++;
            } else if (nextChar === "я") {
                result += "ya";
                i++;
            } else if (nextChar === "и") {
                result += "i";
                i++;
            } else {
                continue;
            }
        } else if (char === "ъ") {
            if (nextChar === "е") {
                result += "ye";
                i++;
            } else if (nextChar === "ё") {
                result += "yo";
                i++;
            } else if (nextChar === "ю") {
                result += "yu";
                i++;
            } else if (nextChar === "я") {
                result += "ya";
                i++;
            }
        } else if (char === "и") {
            if (i === 0 || /[аеёиоуыэюяaeiouy]/.test(textLower[i - 1])) {
                if (nextChar === "я") {
                    result += "ya";
                    i++;
                } else if (nextChar === "е") {
                    result += "ye";
                    i++;
                } else if (nextChar === "ё") {
                    result += "yo";
                    i++;
                } else if (nextChar === "ю") {
                    result += "yu";
                    i++;
                } else {
                    result += "i";
                }
            } else {
                result += "i";
            }
        } else {
            result += transliterationMap[char] || (char >= "0" && char <= "9" ? char : "-");
        }
    }

    return result
        .replace(/-+/g, separator)
        .replace(/^-|-$/g, "") || "";
};

function initTranslit() {
    if (!textInputElement || !resultElement || !separator || !copyBtn) return;
    const translit = () => {
        const text = textInputElement.value;
        resultElement.textContent = seoTransliterate(text, separator.value);
    };
    textInputElement.addEventListener("input", translit);
    separator.addEventListener("input", translit);
    copyBtn.addEventListener("click", async () => {
        try {
            const textToCopy = resultElement.textContent || resultElement.value;
            await navigator.clipboard.writeText(textToCopy);
            const copyBtnHtml = copyBtn.innerHTML;

            copyBtn.textContent = "Скопировано!";
            copyBtn.classList.add("copied");

            setTimeout(() => {
                copyBtn.innerHTML = copyBtnHtml;
                copyBtn.classList.remove("copied");
            }, 2000);

        } catch (err) {
            console.error("Ошибка копирования:", err);
        }
    });
}

initTranslit();
