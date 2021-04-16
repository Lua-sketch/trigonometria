//function setup(){}
var graus_radianos = function(p){
    var slider;
    var theta;
    var r = 50;
    var xi = 200;
    var yi = 50;
    var x;
    var y;

    p.setup = function(){
      p.createCanvas(390, 280);
      slider = p.createSlider(0, 360, 0);
    };

    p.draw = function(){
      p.textFont('Georgia');
      p.background(255);
      p.fill(0);
      p.text(slider.value(), 370, 260);
      theta = slider.value();
      x = r*p.cos(theta*p.PI/180) + xi;
      y = -r*p.sin(theta*p.PI/180) + yi;
      p.stroke(0);
      p.fill(255);
      p.circle(xi, yi, 2*r);
      p.line(xi, yi, x, y);
      p.fill(0);
      p.text(theta*p.PI/180, x+5, y+5);
      p.textSize(16);
      p.text('θ = 𝜙 * (𝜋 / 180)', 175, 150);
      p.textSize(12);
      p.text('θ = ângulo em radianos', 175, 175);
      p.text('𝜙 = ângulo em graus', 175, 200);
    };
};

var unidades = new p5(graus_radianos, 'graus_radianos');

var cart_polar = function(p){
  var w=375;
  var h=290;

  p.setup = function(){
    p.createCanvas(w, h);
    slider_x = p.createSlider(-100, 100, 0);
    slider_y = p.createSlider(-100, 100, 0);
  };

  p.draw = function(){
    var x = slider_x.value();
    var y = slider_y.value()
    p.background(255);
    p.line(w/2, h/2+100, w/2, h/2-100);
    p.line(w/2+100, h/2, w/2-100, h/2);
    p.fill(0);
    p.circle(w/2+x, h/2-y, 5);
    p.text('x = '+x, 330, 260);
    p.text('y = '+y, 330, 280);
    var r = p.round(p.sqrt(p.sq(x)+p.sq(y)));
    var theta = p.round(p.atan(y/x));
    if (x<0){
      p.text('(r, θ) = '+'('+r+', '+theta+')', w/2+x+10, h/2-y);
    }else{
      p.text('(r, θ) = '+'('+r+', '+theta+')', w/2+x-90, h/2-y);
    };
    p.text('θ = arctan(y/x)', 280, 100);
    p.text('r = √(x² + y²)', 280, 70);
  };
};

var coordenadas = new p5(cart_polar, 'cart_polar');
