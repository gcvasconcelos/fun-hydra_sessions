// less mind

//s0.initScreen()

src(s0)
	.add(src(s0).colorama(2).diff(osc(1,0.1,()=>time%5)).modulate(osc(10,0.15)))
	.modulate(voronoi([1,5,8]), 0.1)
	.scale([0.9,1,1.1])
	.out()