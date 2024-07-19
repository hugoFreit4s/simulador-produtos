// Printer.js
import React from 'react';

class Printer extends React.Component {
    render() {
        const { saldoMedio } = this.props;

        return (
            <div>
                <table>
                    <thead>
                        <th style={{color: 'black'}}>Oi</th>
                    </thead>
                </table>
                <h1 style={{color: 'black'}}>Saldo Médio</h1>
                <p style={{color: 'black'}}>{saldoMedio}</p>
            </div>
        );
    }
}

export default Printer;