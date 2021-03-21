import React from 'react'
import CurrencyFormat from "react-currency-format";

export default function NepaliCurrency({price}) {
    return (
        <CurrencyFormat
                      value={price}
                      displayType="text"
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                      prefix="RS "
                      thousandSpacing="2s"
                    />
    )
}
