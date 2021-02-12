/**
 * Input file transfer object
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by CobiGen.
 */
export class InputFileEto {
  readonly filename: string;
  readonly content: string;
  readonly charset: string;

  public constructor(filename: string, content: string, charset: string) {
    this.filename = filename;
    this.content = content;
    this.charset = charset;
  }
}