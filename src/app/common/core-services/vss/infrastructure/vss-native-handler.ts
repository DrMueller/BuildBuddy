export class VssNativeHandler {
  public static getVss(): any {
    const result = window['VSS'];
    return result;
  }

  public static getWebContext(): any {
    const vss = this.getVss();
    const result = vss.getWebContext();

    return result;
  }
}
