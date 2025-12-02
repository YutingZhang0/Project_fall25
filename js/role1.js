// Chibi dialog: random rotating lines per role
(function () {
  const trigger = document.querySelector(".chibi-trigger");
  const dialog = trigger ? trigger.querySelector(".chibi-dialog") : null;
  if (!trigger || !dialog) return;

  const navToggle = document.querySelector(".nav-toggle");
  const navBar = document.querySelector(".nav-bar");
  if (navToggle && navBar) {
    navToggle.addEventListener("click", () => {
      const isOpen = navBar.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const pageKey = (location.pathname.split("/").pop() || "role1.html").replace(".html", "");
  const linesByPage = {
    role1: [
      "You look even better than I imagined.",
      "Care to race me across the river?",
      "A swift strike solves most problems.",
      "Stay close—Jiangdong can be unkind to strangers.",
    ],
    role2: [
      '"My heart is no stone; it will not turn." Do you truly mean to gift me this line?',
      "Calm tea, clear mind—join me?",
      "Your presence is as gentle as spring rain.",
      "Even a measured move can change the whole game.",
    ],
    role3: [
      "Trust no one but me.",
      "Destiny bends, but only if you dare.",
      "The stars whispered your name tonight.",
      "If you hesitate, fate will choose for you.",
    ],
    role4: [
      "You and the Embroidered Guard are the last blade I can wield—and the one I least wish to draw.",
      "In the palace shadows, every smile hides a blade.",
      "I still remember simpler days in Yinyuan Pavilion.",
      "Promise me you'll survive this court.",
    ],
    role5: [
      "The only matter I care about is whether you live or die.",
      "Coins are lighter than debts—I carry neither for long.",
      "Buy me a house in Luoyang, and I'll consider smiling.",
      "I watch your back because no one else will.",
    ],
  };

  const lines = linesByPage[pageKey] || linesByPage.role1;
  const pickLine = () => lines[Math.floor(Math.random() * lines.length)];

  const setLine = () => {
    dialog.textContent = pickLine();
  };

  setLine();

  trigger.addEventListener("click", () => {
    setLine();
    trigger.classList.toggle("is-open");
  });
})();
