export class EditFormBase<T> {
  value: T;
  key: string;
  required: boolean;
  label: string;
  type: string;
  controlType: string;

  constructor(options: {
    value?: T,
    key?: string,
    required?: boolean,
    label?: string,
    type?: string,
    controlType?: string
  } = {}) {

    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = options.required || false;
    this.type = options.type || 'text';
    this.controlType = options.controlType || 'textbox';

  }

}
