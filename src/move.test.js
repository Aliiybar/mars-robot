import Move from "./move.js"

describe("Rover movement tests", () => {
  describe('Happy paths', ()=> {
    test("Given_TheCommandAs_FF_When_ItMoves_Then_PositionShouldBe_3,1,North", () => {
      const plateau = "5x5";
      const commands = "FF"

      const result = Move(plateau, commands);
      expect(result).toBe('3,1,North');
    })
}) 
})