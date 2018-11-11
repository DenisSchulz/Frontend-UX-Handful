function Element(id, name)
{
  //Unique element-ID and element name from DB
  this.id    = id;
  this.name  = name;

  //variables used to draw the arc
  this.x     = width / 2;
  this.y     = height / 2;
  this.s     = 350;
  this.start = 0;
  this.end   = 90;

  //AngleWidth
  this.width = this.end - this.start

  this.borderColor = 255;
  this.fillColor   = 200;
  this.textColor   = 0;

  this.text = this.name;

  this.expandedSize = this.s + this.s / 4;
  this.originalSize = this.s;
  this.cooldown = 20;
  this.timer    = 0;
  this.selected = false;


  this.draw = function()
  {
    this.timer++;
    push();
    stroke(this.borderColor);
    fill(this.fillColor);
    arc(this.x, this.y, this.s, this.s, this.start, this.end, PIE);
    this.displayText();
    pop();
  }

  this.mouseOn = function()
  {
    let a = posAngle(angle(this.x, this.y, mouseX, mouseY));
    let d = dist(this.x, this.y, mouseX, mouseY);

    if (a >= this.start && a <= this.end && d <= this.s / 2)
    {
      //console.log(a);
      this.expand();
      return true;
    }
    else
    {
      //console.log(a);
      this.contract();
      return false;
    }
  }

  this.reposition = function(s, e)
  {
    this.start = s;
    this.end   = e;
    this.width = this.end - this.start;
  }

  this.expand = function()
  {
    if (this.s < this.expandedSize && this.timer > this.cooldown)
    {
      this.s = this.s + animSpeed;
    }
  }

  this.contract = function()
  {
    if (this.s > this.originalSize && this.selected === false)
    {
      this.s = this.s - animSpeed;
    }
  }

  this.displayText = function()
  {
    let a = this.start + this.width * 0.5;
    let dir = 1;
    if (a > 90 && a < 270)
    {
      a = a - 180;
      dir = -1;
    }
    ts = this.width;
    push();
    noStroke();
    fill(this.textColor);
    textSize(ts);
    while (textWidth(this.text) >= this.s / 3)
    {
      ts--;
      textSize(ts);
    }
    textAlign(CENTER, CENTER);
    translate(this.x, this.y);
    rotate(a);
    text(this.text, this.s / 3.5 * dir, 0);
    pop();
  }

  this.toggleSelected = function()
  {
    if (this.selected === false)
    {
      this.s = this.expandedSize;
      this.selected = true;
    }
    else
    {
      this.s = this.originalSize;
      this.timer = 0;
      this.selected = false;

    }
  }

  this.initChildren = function()
  {
    //recursively pushing child elements into circle - Array
  }

}
