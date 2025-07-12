import React, { useState } from 'react';

export default function Calculator() {
  // State variables fo calculator
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null); 

  // Main calculation function - does all the math
  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2)

    // Basic input validation
    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }

    let res;
    // Perform calculation based on selected operator
    switch (operator) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/': res = b !== 0 ? a / b : 'Divide by zero'; break;
      default: res = 'Unknown operator';
    }
    setResult(res); // Update result state
  };

  // Render the calculator UI
  return (
    <div style={{
      padding: '2rem',
      paddingTop: '0.5rem',
      maxWidth: '400px',
      margin: 'auto',
      marginTop: '2rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{
        marginBottom: '1.5rem',
        color: '#333',
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: 600,
      }}>Simple Calculator</h2>
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
        alignItems: 'center',
      }}>
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          placeholder="First number"
          style={{
            width: '45%',
            flex: 1,
            padding: '0.8rem',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease',
          }}
          onFocus={e => e.target.style.borderColor = '#4a90e2'}
          onBlur={e => e.target.style.borderColor = '#e0e0e0'}
        />
        
        <select
          value={operator}
          onChange={e => setOperator(e.target.value)}
          style={{
            flex: 0.5,
            padding: '0.8rem',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            fontSize: '1.2rem',
            textAlign: 'center',
            transition: 'border-color 0.3s ease',
          }}
          onFocus={e => e.target.style.borderColor = '#4a90e2'}
          onBlur={e => e.target.style.borderColor = '#e0e0e0'}
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          placeholder="Second number"
          style={{
            width: '45%',
            flex: 1,
            padding: '0.8rem',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease',
          }}
          onFocus={e => e.target.style.borderColor = '#4a90e2'}
          onBlur={e => e.target.style.borderColor = '#e0e0e0'}
        />
      </div>

      <button 
        onClick={calculate}
        style={{
          width: '100%',
          padding: '0.8rem',
          backgroundColor: '#4a90e2',
          color: 'white',
          borderRadius: '8px',
          border: 'none',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#357abd'}
        onMouseOut={e => e.target.style.backgroundColor = '#4a90e2'}
      >
        Calculate
      </button>

      {result !== null && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1.2rem',
            color: '#333',
          }}>
            <strong>Result:</strong>
            <span style={{
              fontWeight: 600,
              color: '#2ecc71',
            }}>{result}</span>
          </div>
        </div>
      )}
    </div>
  );
}