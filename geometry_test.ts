import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});




Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
})

// kurze note: ich hab mir denn bisher bestehenden code erklären lassen mit Ki.
// Da ich bei der mathematik nicht mehr ganz durch schaute

Deno.test("diameter of circle with radius 3 is 6", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 3);

  // When
  const actual = circle.diameter();

  // Then
  assertAlmostEquals(actual, 6);
});