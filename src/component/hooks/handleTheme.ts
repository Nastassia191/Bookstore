

export const handleTheme = (changed?: boolean) => {
  const SHOW_THEME = "showTheme";
  const theme = localStorage.getItem(SHOW_THEME);
  if (changed) {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme !== "dark" ? "dark" : "";
    document.body.dataset.theme = newTheme;
    localStorage.setItem(SHOW_THEME, newTheme);
  } else if (theme) {
    document.body.dataset.theme = theme;
  }
}