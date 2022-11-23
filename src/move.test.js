import Move from "./move.js"

describe("Rover movement tests", () => {
  describe('Happy paths', ()=> {
    test("Given_TheCommandAs_FF_When_ItMoves_Then_PositionShouldBe_3,1,North", () => {
      const plateau = "5x5";
      const commands = "FF"

      const result = Move(plateau, commands);
      expect(result).toBe('3,1,North');
    })
    test("Given_TheCommandAs_RFF_When_ItMoves_Then_PositionShouldBe_1,3,East", () => {
      const plateau = "5x5";
      const commands = "RFF"

      const result = Move(plateau, commands);
      expect(result).toBe('1,3,East');
    })
    test("Given_TheCommandAs_RFLFFLF_When_ItMoves_Then_PositionShouldBe_3,1,West", () => {
      const plateau = "5x5";
      const commands = "RFLFFLF"

      const result = Move(plateau, commands);
      expect(result).toBe('3,1,West');
    })
  }) 

  describe('Boundries', ()=> {
    test("Given_TheCommandAs_FRFRFF_When_ItMoves_Then_PositionShouldBe_1,2,South", () => {
      const plateau = "5x5";
      const commands = "FRFRFF"

      const result = Move(plateau, commands);
      expect(result).toBe('1,2,South');
    })
    test("Given_TheCommandAs_FFFFFFFF_When_ItMoves_Then_PositionShouldNotPassNorthBoundry", () => {
      const plateau = "5x5";
      const commands = "FFFFFFFF"

      const result = Move(plateau, commands);
      expect(result).toBe('5,1,North');
    })
    test("Given_TheCommandAs_RFFFFFFFF_When_ItMoves_Then_PositionShouldNotPassEastBoundry", () => {
      const plateau = "5x5";
      const commands = "RFFFFFFFF"

      const result = Move(plateau, commands);
      expect(result).toBe('1,5,East');
    })
    test("Given_TheCommandAs_RRFFFFFFF_When_ItMoves_Then_PositionShouldNotPassSouthBoundry", () => {
      const plateau = "5x5";
      const commands = "RRFFFFFFF"

      const result = Move(plateau, commands);
      expect(result).toBe('1,1,South');
    })
    test("Given_TheCommandAs_LFFFFFFFF_When_ItMoves_Then_PositionShouldNotPassWestBoundry", () => {
      const plateau = "5x5";
      const commands = "LFFFFFFFF"

      const result = Move(plateau, commands);
      expect(result).toBe('1,1,West');
    })
    test("Given_TheCommandAs_LFFFFFFFFRF_When_ItMoves_Then_PositionShouldBe_2,1,N", () => {
      const plateau = "5x5";
      const commands = "LFFFFFFFFRF"

      const result = Move(plateau, commands);
      expect(result).toBe('2,1,North');
    })
  }) 
})