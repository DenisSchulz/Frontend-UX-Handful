let animSpeed = 2;
let arraySize = 6;
let circle = [];

function setup()
{
  angleMode(DEGREES);
  createCanvas(500, 500);
  initCircle();
}

function draw()
{
  background(100);
  stroke(255);

  for (let i = 0; i < circle.length; i++)
  {
    circle[i].draw();
    circle[i].mouseOn();
  }

  //arc(x,y,s,s,sa,ea,PIE);

}

function initCircle()
{
  for (let i = 0; i < arraySize; i++)
  {
    circle[i] = new Element(i, "test");
    circle[i].reposition(i * (360 / arraySize), (i+1) * (360/arraySize));
  }
  console.log(circle);
}

function angle(x1, y1, x2, y2)
{
  let a = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  return a;
}

function posAngle(a)
{
  if (a < 0)
  {
    let pA = a + 360;
    return pA;
  }
  else
  {
    return a;
  }
}

function mousePressed()
{
  for (let i = 0; i < circle.length; i++)
  {
    if (circle[i].mouseOn() === true)
    {
      circle[i].toggleSelected();
    }
  }
}
