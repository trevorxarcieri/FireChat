const searchInputWidgetDivClassName = "RNNXgb";

let handleRefineSearchClick = (refineSearchButton) => {
    refineSearchButton.addEventListener("click", () => {
        console.log("Refine search button clicked");
    });
}


let injectRefineSearchButton = () => {
    let searchInputWidgetDiv = document.body.getElementsByClassName(searchInputWidgetDivClassName)[0];

    let refineSearchButton = document.createElement("div");
    refineSearchButton.style.display = "flex";
    refineSearchButton.style.width = "44px";
    refineSearchButton.style.height = "44px";
    refineSearchButton.className = "searchInputButton";
    refineSearchButton.style.alignItems = "center";
    refineSearchButton.style.cursor = "pointer";

    let refineSearchButtonSvg = document.createElement("img");
    refineSearchButtonSvg.src = chrome.runtime.getURL("icons/fire-svgrepo-com.svg");
    refineSearchButtonSvg.style.width = "24px";
    refineSearchButtonSvg.style.height = "24px";

    refineSearchButton.appendChild(refineSearchButtonSvg);
    searchInputWidgetDiv.appendChild(refineSearchButton);

    handleRefineSearchClick(refineSearchButton);
}


var main = () => {
    injectRefineSearchButton();
}

main();