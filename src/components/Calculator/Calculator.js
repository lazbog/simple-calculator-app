import React from 'react';
import Display from '@/components/Display/Display';
import Keypad from '@/components/Keypad/Keypad';
import History from '@/components/History/History';
import { useCalculator } from '@/hooks/useCalculator';
import styles from './Calculator.module.css';

const Calculator: React.FC = () => {
  const {
    currentValue,
    previousValue,
    operation,
    history,
    handleNumber,
    handleOperator,
    handleEquals,
    handleClear,
    handleDecimal,
    handleBackspace,
    toggleHistory,
    showHistory,
  } = useCalculator();

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorContainer}>
        <Display
          currentValue={currentValue}
          previousValue={previousValue}
          operation={operation}
        />
        <Keypad
          onNumberClick={handleNumber}
          onOperatorClick={handleOperator}
          onEqualsClick={handleEquals}
          onClearClick={handleClear}
          onDecimalClick={handleDecimal}
          onBackspaceClick={handleBackspace}
        />
      </div>
      
      <div className={`${styles.historyContainer} ${showHistory ? styles.show : ''}`}>
        <button
          className={styles.historyToggle}
          onClick={toggleHistory}
          aria-label={showHistory ? 'Hide history' : 'Show history'}
        >
          {showHistory ? 'Hide' : 'Show'} History
        </button>
        {showHistory && (
          <History
            history={history}
            className={styles.historyPanel}
          />
        )}
      </div>
    </div>
  );
};

export default Calculator;