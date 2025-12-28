import useWindowStore from "#store/windows"

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
	<div id="window-controls">
    <div className="close" onClick={() => closeWindow(target)}/>
    <div className="minimize" />
    <dive className="maximize" />
  </div>
  )
}

export default WindowControls