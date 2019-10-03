// earthworm 

shape(2)
	.scale(0.1)
	.modulate(noise(3).scale(2))
	.mult(osc(0.1,0.3,[0,10]).color(1,0,1))
	.diff(src(o0))
	.out(o0)
 
osc(1.5,-0.5,2)
	.color(0,0,()=>Math.sin(time)*0.1+0.5)
	.kaleid(2)
	.add(src(o0))
	.modulateRotate(osc(10))
	.out(o1)

render(o1)
 