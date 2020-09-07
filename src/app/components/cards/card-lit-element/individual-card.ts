import {
  LitElement,
  html,
  customElement,
  property,
  css,
  unsafeCSS,
} from 'lit-element';

@customElement('card-element')
export class IndividualCard extends LitElement {
  static get styles() {
    // Write styles in standard CSS
    return css`
      .card-details {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 2px 10%;
        color: var(--theme-text-color-opp);
        border-bottom: 1px solid #e6e2e2;
      }
      img {
        width: 90%;
      }
    `;
  }

  render() {
    return html`
      <img src=${this.card['imagePath']} />
      <div class="card-details">
        <span>Type</span>

        <span>${this.card['cardClass']}</span>
      </div>
      <div class="card-details">
        <span>Quantity</span>

        <span>${this.card['quantity']}</span>
      </div>
      <div class="card-details">
        <span>Price</span>

        <span>Rs.${this.card['price']}</span>
      </div>
    `;
  }
  @property({ type: [] })
  card: any;
}
