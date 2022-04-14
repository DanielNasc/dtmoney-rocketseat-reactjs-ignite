import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income img" />
        </header>
        <strong>R$400,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Income img" />
        </header>
        <strong>R$400,00</strong>
      </div>
      <div className="highlighted-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Income img" />
        </header>
        <strong>R$400,00</strong>
      </div>
    </Container>
  );
}
