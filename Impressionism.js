// Purple mountain

function setup()
{
   var d, res1, res2, res3, res4, res5, cir1;

   createCanvas(600, 400);
   background(255);
   noStroke();


   //base stroke
   for (var y=5; y<height; y+=17)
   {
      for (var x=12; x<width; x+=17)
      {
         d = distance(x, y, x, height)
         
         //left brown shape
         res1 = imp_line(x, y, 0, height, 125, 0);
         //top blue
         res2 = imp_line(x, y, 0, 125, width, 125);
         //top of right brown shape
         res3 = imp_line(x, y, 25, height, width-10, 30);
         //bottom of right brown shape
         res4 = imp_line(x, y, 25, 0, width-50, height);
         //bottom blue
         res5 = imp_line(x, y, 0, 300, width, 300);

         cir1 = imp_circle(x, y, 330, 225, 30)

         if (res5 > 0)   
            fill(60, 130+random(-25, 25)-d/2, 160+random(-50, 50));
         else if (cir1 < 0)
            fill(60, 130+random(-1, 1), 160+random(-50, 50))         
         else if (res3 > 0 && res4 < 0)
            fill(190+random(-50, 50), 150+random(-50, 25), 80);
         else if (res2 < 0)
            fill(60, 130+random(-1, 1), 160+random(-50, 50));
         else if (res1 < 0)
            fill(200+random(-50, 50), 150+random(-50, 25), 80);
         else
            fill(200+random(-25, 50));

         ellipse(x+random(-10,10), y+random(-10,10), 35+random(-10,10), 35+random(-10,10));
      }
   }

   //smear and opacity stroke
   for (var y=12; y<height; y+=20)
   {
      for (var x=12; x<width; x+=20)
      {
         d = distance(x, y, x, height)
         
         //left brown shape
         res1 = imp_line(x, y, 0, height, 125, 0);
         //top blue
         res2 = imp_line(x, y, 0, 125, width, 125);
         //top of right brown shape
         res3 = imp_line(x, y, 25, height, width-10, 30);
         //bottom of right brown shape
         res4 = imp_line(x, y, 25, 0, width-50, height);
         //bottom blue
         res5 = imp_line(x, y, 0, 300, width, 300);

         cir1 = imp_circle(x, y, 330, 225, 30)

         if (res5 > 0)   
            fill(60, 130+random(-25, 25)-d/2, 160+random(-50, 50), 200);
         else if (cir1 < 0)
            fill(60, 130+random(-1, 1), 160+random(-50, 50), 100)         
         else if (res3 > 0 && res4 < 0)
            fill(190+random(-50, 50), 150+random(-50, 25), 80, 100);
         else if (res2 < 0)
            fill(60, 130+random(-1, 1), 160+random(-50, 50), 100);
         else if (res1 < 0)
            fill(200+random(-50, 50), 150+random(-50, 25), 80, 100);

         else
            fill(200+random(-25, 50), 100);

         ellipse(x+random(-10,10), y+random(-10,10), 25);
      }
   }


   for (var i =0; i<15; i++)
   {
      fill(color(80+random(-20,20), 40, 130+random(-20,20), 190))
      rand_ellipse(random(370, 490), random(170, 270), 30+random(-20, 10), 15+random(-10,10), random(0, 2*PI))
   }
}



function imp_line(x, y, x0, y0, x1, y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function imp_circle(x, y, cX, cY, r)
{
   return (x-cX)*(x-cX) + (y-cY)*(y-cY) - r*r;
}

function rand_ellipse(x, y, w, h, rot)
{
   push();
   translate(x, y)
   rotate(rot)
   ellipse(0, 0, w, h)
   pop();
}

function distance(x0, y0, x1, y1)
{
   return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}