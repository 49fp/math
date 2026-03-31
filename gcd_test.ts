import { assertEquals } from "@std/assert/equals";
import { numbers } from "./gcd.ts";

Deno.test("Grösster Gemeinsamer Teiler", () => {
    const number = new numbers(18, 27);
    const result = number.gcdBruteForce();

    assertEquals(result, 9);
});