export function injectTheme(theme) {
    let sheet = document.getElementById('css-theme');
    if (!sheet) {
        sheet = document.createElement('style');
        sheet.setAttribute('id', 'css-theme');
        document.head.appendChild(sheet);
    }
    // TODO: Generate automatically the :root part
    sheet.innerHTML = `
    :root{
      ${theme.typography.fontSize.asRule()}
      ${theme.backgroundColor.z0.asRule()}
      ${theme.backgroundColor.z1.asRule()}
      ${theme.backgroundColor.z2.asRule()}
      ${theme.color.primary.asRule()}
      ${theme.color.primaryText.asRule()}   
      ${theme.color.active.asRule()}
      ${theme.color.activeText.asRule()}   
      ${theme.color.disabled.asRule()}      
      ${theme.color.disabledText.asRule()}
    }


    html{
      font-size: ${theme.typography.fontSize.asVar()};
      background-color: ${theme.backgroundColor.z0.asVar()};
    }
  `;
}
//# sourceMappingURL=injectTheme.js.map