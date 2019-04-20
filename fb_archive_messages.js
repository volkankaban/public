(function run() {
  let all = document.querySelectorAll('div[aria-label="Conversation actions"]');
  if (all.length == 0) return;
  let a = all[0];
  a.click();
  setTimeout(() => {
    document.querySelectorAll('a[role=menuitem]').forEach(act => {
      if (act.innerText.match(/Archive/)) act.click();
    });
    run();
  }, 250);
})();