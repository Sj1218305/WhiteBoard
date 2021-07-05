import React from 'react'
import canvas2image from 'canvas2image'

console.log(canvas2image)

function TakeSnapShot(){	
	const canvas = document.getElementById("board");
	const width = canvas.getAttribute("width");
	const height = canvas.getAttribute("height");

	// document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	var link = document.createElement('a');
	link.download = "screenshot.png";
	link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
	link.click();
}

function SnapShot() {
    return (
    <div className="take-snapshot">
        <button className="snapshot-button" onClick = {TakeSnapShot}> Take A Snapshot</button>
    </div>
    )
}

export default SnapShot