function windowPositioner (tray, win) {
  const trayBounds = tray.getBounds();

  const winSize = win.getSize();

  if (!win.isVisible()) {
    win.show();
    const xPos = Number((trayBounds.x) - (winSize[0] / 2)).toFixed(0) - 1;
    const yPos = (trayBounds.y) - Number(winSize[1]);
    win.setPosition(xPos, yPos);
  } else { win.hide(); }
}

module.exports = windowPositioner;
