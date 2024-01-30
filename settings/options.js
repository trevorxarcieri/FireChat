function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
      OPENAI_API_KEY: document.querySelector("#OPENAI_API_KEY").value,
    });
}

document.querySelector("form").addEventListener("submit", saveOptions);