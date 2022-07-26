import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form className="form-cards">
          <p>Nome:</p>
          <input
            type="text"
            name=""
            id=""
            data-testid="name-input"
            value={ cardName }
          />
          <p>Descrição:</p>
          <textarea
            name=""
            id=""
            data-testid="description-input"
            value={ cardDescription }
          />
          <p>attr01</p>
          <input
            type="number"
            name=""
            id=""
            data-testid="attr1-input"
            value={ cardAttr1 }
          />
          <p>attr02</p>
          <input
            type="number"
            name=""
            id=""
            data-testid="attr2-input"
            value={ cardAttr2 }
          />
          <p>attr03</p>
          <input
            type="number"
            name=""
            id=""
            data-testid="attr3-input"
            value={ cardAttr3 }
          />
          <p>Imagem:</p>
          <input
            type="text"
            name=""
            id=""
            data-testid="image-input"
            value={ cardImage }
          />
          <p>Selecione a raridade da carta:</p>
          <select
            name="cardRare"
            id=""
            data-testid="rare-input"
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <input
            type="checkbox"
            name=""
            id="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
          />
          Super Trybe Trunfo
          <button
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
