import React from 'react';
import PrintContent from './PrintContent';

class Printer extends React.Component {
    render() {
        const { saldoMedio } = this.props;

        return (
            <div>
                <PrintContent />
            </div>
        );
    }
}

export default Printer;