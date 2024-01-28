function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      OPEN_API_KEY: document.querySelector("#OPENAI_API_KEY").value,
    });
}

document.querySelector("form").addEventListener("submit", saveOptions);