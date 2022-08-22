import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-json-to-interface',
  templateUrl: './tools-json-to-interface.component.html',
  styleUrls: ['./tools-json-to-interface.component.scss'],
})
export class ToolsJsonToInterfaceComponent implements OnInit {
  ParseValue = '';
  private _textValue = '';
  get textValue() {
    return this._textValue;
  }
  set textValue(value) {
    let jValue = '';
    try {
      jValue = JSON.parse(value);
    } catch (e) {
      console.warn();
    }
    this.ParseValue = this.jsonToInterface(jValue);
    this._textValue = value;
  }
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonToInterface(value: any): string {
    let result = '\n { ';
    let isArrayBool = false;
    Object.entries(value).forEach((e) => {
      if (!isNaN(Number(e[0]))) {
        if (Number(e[0]) == 0) {
          result = '';
          result = result + this.jsonToInterface(e[1]) + '  ,\n';
          isArrayBool = true;
        }
      } else {
        if (e[1] === null) {
          result += e[0] + ':' + 'null' + ',\n';
        } else {
          switch (typeof e[1]) {
            case 'number':
              result += e[0] + ':' + 'number' + ',\n';
              break;
            case 'string':
              result += e[0] + ':' + 'string' + ',\n';
              break;
            case 'boolean':
              result += e[0] + ':' + 'boolean' + ',\n';
              break;

            default:
              if (Array.isArray(e[1])) {
                result += e[0] + ':[' + this.jsonToInterface(e[1]) + '],\n';
              } else {
                result += e[0] + ':' + this.jsonToInterface(e[1]) + ',\n';
                break;
              }
          }
        }
      }
    });
    return isArrayBool ? result : result + '}';
  }
  ngOnInit(): void {}
}
