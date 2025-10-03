// typescript definitions for hex2pantone
// made by alexgabe-dev

export interface PantoneColor {
  name: string;
  code: string;
  hex: string;
  rgb: [number, number, number];
}

export interface Hex2PantoneOptions {
  includeDistance?: boolean;
  maxDistance?: number;
}

export interface Hex2PantoneResult {
  match: PantoneColor | null;
  inputHex: string;
  inputRgb: [number, number, number];
  distance?: number;
  message?: string;
  error?: string;
}

export interface BatchResult extends Hex2PantoneResult {
  originalIndex: number;
  success: boolean;
}

export interface BatchConvertResult {
  results: BatchResult[];
  total: number;
  successful: number;
  failed: number;
  successRate: number;
  message?: string;
  error?: string;
}

// the main function 
export function hex2pantone(hexColor: string, options?: Hex2PantoneOptions): Hex2PantoneResult;

// get all the pantone colors i have
export function getAllPantoneColors(): PantoneColor[];

// search through my pantone colors
export function searchPantoneColors(query: string): PantoneColor[];

// helper function to turn hex into rgb
export function hexToRgb(hex: string): [number, number, number];

// calculate how different two colors are
export function colorDistance(rgb1: [number, number, number], rgb2: [number, number, number]): number;

// batch processing 
export function batchConvert(hexColors: string[], options?: Hex2PantoneOptions): BatchConvertResult;

// helper to get just the successful matches from batches
export function getSuccessfulMatches(batchResults: BatchConvertResult): BatchResult[];

// helper to get just the failed ones for debug
export function getFailedMatches(batchResults: BatchConvertResult): BatchResult[];
