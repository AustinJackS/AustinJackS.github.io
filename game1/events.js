function addv(id,evt,fun)
{
	var obj1 = document.getElementById(id)
	obj1.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        x = parseInt(touchobj.clientX)		// get x position of touch point relative to left edge of browser
		y = parseInt(touchobj.clientY)      // get y position of touch point relative to left edge of browser
		fun(x,y)
        e.preventDefault()
    }, false)
}