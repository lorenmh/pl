I've always been interested in patterns that manifest themselves unexpectedly.  

The most interesting patterns are those that come from a set of simple rules that, when put to action, result in the unexpected. Such patterns can be called [emergent patterns](https://en.wikipedia.org/wiki/Emergence), which are patterns and phenomena that seem to 'emerge' from a system.  

A popular example of emergent patterns within the realm of computer science is visible in the famous '[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)'.  One could say that life on Earth is another example of a pattern of emergence, with the rules that give rise to the pattern (ie life) being those that are studied in physics and chemistry (chemical bonds, etc.).  

I'm writing about emergent patterns because when I was making the background visualization for this website an unexpected pattern emerged caused by the way I implemented the code for moving the points.  **If you look closely at the background visualization you should see a predominance of diagonal lines**; most of the visible lines have a slope near to `1` or `-1`.  This was an unintented result.  

The code that caused this was from a limit I placed on the 'velocity vector' of the points that draw the lines.  Each point has a velocity vector which corresponds to the movement that the point will make for each step of the animation.  For example, a velocity vector of `[ 0.5, -0.7 ]` would mean that the point will move `0.5` units to the right, and `-0.7` units up (with an HTML canvas the origin is at the top left, so a negative y-movement would correspond with a move upwards).  

For every step of the animation there is a random number which is added to the x and y components of the velocity vector.  Because these random numbers are added to the velocity vector, if there were no limits in place then some of the points would move too quickly.  To make sure that none of the points move too quickly, I implemented a 'naive' limit on the velocity.  This naive implementation is what causes the pattern to emerge:  
~~~javascript
// point.velocity is the velocity vector
// point.velocity[ 0 ] is the x component of the velocity vector
// point.velocity[ 1 ] is the y component of the velocity vector
point.velocity[ 0 ] += ( 0.5 - Math.random() ); // adds a random number 
point.velocity[ 1 ] += ( 0.5 - Math.random() ); // between -0.5 and 0.5

// these statements make sure that the x and y components of the velocity
// stay between the the minimum and maximum values
point.velocity[ 0 ] = Math.min( MAX_X_VELOCITY, point.velocity[ 0 ] );
point.velocity[ 0 ] = Math.max( MIN_X_VELOCITY, point.velocity[ 0 ] );
point.velocity[ 1 ] = Math.min( MAX_Y_VELOCITY, point.velocity[ 1 ] );
point.velocity[ 1 ] = Math.max( MIN_Y_VELOCITY, point.velocity[ 1 ] );
~~~

The code looks simple enough, but how is it that this would cause the 'diagonal line pattern' to manifest itself?  Remember that *the actual velocity of a point will be the magnitude of its velocity vector*. Because my naive implementation of the velocity vector limits the x and y components but not the magnitude of the velocity itself, **the point can always go faster when it is moving at a diagonal**.  

To illustrate this, remember that the magnitude of velocity vector can be computed using the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem) that we all learned in grade school.  Pythagora's theorem is the trigonometric equation `a**2 + b**2 = c**2` (that's just notation for 'a-squared plus b-squared equals c-squared').

Assuming the `MAX_X_VELOCITY` and `MAX_Y_VELOCITY` are both some number, let's say `10`, and the `MIN_X_VELOCITY` and `MIN_Y_VELOCITY` are both `-10`, then the maximum speed for horizontal and vertical movement could be computed with the following code:
```
// The max vertical and horizontal speeds
var maxUpwardSpeed      = Math.sqrt( Math.pow( 0, 2 ) + Math.pow( 10, 2 ) ),
    maxDownwardSpeed    = Math.sqrt( Math.pow( 0, 2 ) + Math.pow( -10, 2 ) ),
    maxRightwardSpeed   = Math.sqrt( Math.pow( 10, 2 ) + Math.pow( 0, 2 ) ),
    maxLeftwardSpeed    = Math.sqrt( Math.pow( -10, 2 ) + Math.pow( 0, 2 ) )
;
```
From this we learn:  
The maximum speed in the upward direction is `10`  
The maximum speed in the downward direction is `10`  
The maximum speed in the rightward direction is `10`  
The maximum speed in the left direction is `10`  

But for diagonal movement with a slope of `1`, then the following would be true:
```
var maxDiagonalSpeed = Math.sqrt( Math.pow( 10, 2 ) + Math.pow( 10, 2 ) );
```

**Which means the maximum speed at a diagonal (with slope 1 or -1) would be `14.1`**

Because the points can move 41% faster when moving at diagonals, the resulting lines from the points moving diagonally are the most visible.  They move away from the center the quickest and are therefore more likely to leave a mark on the background.  This makes it so that the background has more diagonal lines than vertical or horizontal lines.  

Interestingly there are similar phenomona in nature.  In nature many species adopt a strategy of spreading their seeds as far and wide as possible.  For example, dandelions are everywhere because they spread their seeds so well.  Because dandelions were able to spread their seeds quickly, they were able to reach untapped ecosystems before competing species.  This rapidity of spreading their seeds helped dendelions gain prominence in their niche.

Similarly, with the background animation those points which move more quickly leave more of a mark on the background.  A point which moves diagonally will mark `1.4` times as much of the canvas as a point which moves vertically.  This means that the points which are the likeliest to reach an unmarked part of the canvas are moving diagonally.     

When I first discovered the pattern of the diagonal lines I was going to rewrite the code that limits the velocity (which would effectively remove the pattern).  However, after later reflecting on it, I decided to keep the faulty code because it's an interesting example of emergence.

Through a simple set of rules unintended patterns can emerge, and while it was not my intention, the pattern does look rather neat.