//a.show()
a.setBins(6)
a.settings[0].scale = 10
a.settings[1].scale = 9
a.settings[0].cutoff = 7
a.settings[1].cutoff = 7
a.setSmooth(0.2)

//s0.initCam()
bpm(80)

src(s0)
	.pixelate(150)
  	.scale(() => Math.sin(time*(a.fft[0]+a.fft[1]))*0.05+0.9)
	.add(src(o0).colorama())
	.modulate(osc(() => Math.sin(time*(a.fft[0]+a.fft[1]))*0.05+1),0.1)
	.add(osc(1,1,2))
	.repeat([1,2,3],[1,2,3])
	.out(o0)