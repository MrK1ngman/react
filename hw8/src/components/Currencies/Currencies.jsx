import Currency from "./Currency"

function Currencies() {
    return (
        <div className="currencies">
            <ul className="currenciesList">
                <Currency
                    name={'USD MOEX'}
                    value={'63,52'}
                />
                <Currency
                    name={'EUR MOEX'}
                    value={'70,52'}
                />
                <Currency
                    name={'НЕФТЬ'}
                    value={'64,52'}
                />
            </ul>
        </div>
    )
}

export default Currencies