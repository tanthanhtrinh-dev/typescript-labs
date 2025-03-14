interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: unknown;
  }
   
  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
   
  let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

// Excess Property Checks
let squareOptions = { colour: "red", width: 100 };
let mySquare01 = createSquare(squareOptions);