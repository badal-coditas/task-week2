import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('button-element')
export class ListButtonElement extends LitElement {
  static get styles() {
    // Write styles in standard CSS
    return css`
      .action-buttons {
        background: #203158;
        border: none;
        padding: 5px 15px;
        color: white;
        margin-right: 5px;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <button class="action-buttons" type="submit">${this.buttonName}</button>
    `;
  }
  @property({ type: String })
  buttonName: any;
}
