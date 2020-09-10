import {
    LitElement,
    html,
    customElement,
    property,
    css,
    unsafeCSS,
  } from 'lit-element';
  
  @customElement('error-box')
  export class ErrorBox extends LitElement {
    static get styles() {
      // Write styles in standard CSS
      return css`
       .error-box-wrapper{
        width: 100%;
        height: 100vw;
        background: #0000003b;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
       }
       .error-box {
        width: 450px;
        height: fit-content;
        padding: 25px 0;
        background: rgb(191 5 22);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        color: #ffffff;
        text-align: center;
        border: 1px solid #ffffff;
      }
      
      `;
    }
  
    render() {
      return html`
      <div class="error-box-wrapper">
      <div class="error-box">
        <div class="error-box-message">${this.message}</div>  
      </div>
    </div>
      `;
    }
    @property({ type: [] })
    message: any;
  }
  