import React from 'react';
//o IngredientInput segue component pattern
function IngredientInput({ amount, onNameChange, onAmountChange }) {
    const handleNameChange = (e) => {
        onNameChange({ name: e.target.value, amount: amount.amount });
    };

    const handleAmountChange = (change) => {
        onAmountChange(change);
    };

    return (
        <div>
            <label className='addIngredientButton'>
                Ingredient:<input type="text" value={amount.name} onChange={handleNameChange} />
                <div>
                    <button type='button' onClick={() => handleAmountChange(-1)}>-</button>
                    <p>{amount.amount}</p>
                    <button type='button' onClick={() => handleAmountChange(1)}>+</button>
                </div>
            </label>
        </div>
    );
}

export default IngredientInput;
