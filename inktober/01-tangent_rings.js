// tangent rings

shape(500,()=>Math.sin(time)*0.1+0.35)
  	.diff(shape(500, ()=>Math.tan(time)*0.1+0.3))
	.repeat(8)
	.modulate(
        osc(5)
        .rotate(0,0.1))
	.mult(osc(60,0.3,2))
	.modulate(noise(2))
	.add(solid([2,0],0,[0,2]))
	.modulateScrollX(osc(10),0.2,0.05)	
  	.add(osc(6, 0.2, 1).color(1,0,1))
	.modulate(src(o0).pixelate(2),0.1)
  	.out(o0)
