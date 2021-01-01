/// <reference types="node" />

export as namespace readimage;

export class Frame {
	data: Buffer;
	delay: number;
	constructor(rgba: Buffer, delay: number);
}
export class Image {
	height: number;
	width: number;
	frames: Frame[];
	constructor(height: number, width: number);
	addFrame(rgba: Buffer, delay: number): void;
}
export default function readimage(buffer: Buffer, callback: (err: Error, image: Image) => void): void;
export var readPromise: (buffer: Buffer) => Promise<Image>;