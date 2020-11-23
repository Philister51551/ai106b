function f (x) { return -1 * (  x  + 1 / ( x * x ) )  }
// function f(x) { return -1*Math.abs(x*x-4); }

var dx = 0.2

function hillClimbing (f, x) {
  while (true) {
    //console.log('test=%s',(-1*(0.1+1/(0.1*0.1))).toFixed(4))
    console.log('f(%s)=%s', x.toFixed(4), -1 * f(x).toFixed(4))
    if(f(x + dx) >= f(x) && f(x - dx) >= f(x))
    {
      if(f(x + dx) > f(x - dx)) {
        x = x + dx
      }else{
        x = x - dx
      }
    }else if (f(x + dx) >= f(x)) {
      x = x + dx
    } else if (f(x - dx) >= f(x)) {
      x = x - dx
    } else {
      break
    }
  }
}

hillClimbing(f, 0.1)
